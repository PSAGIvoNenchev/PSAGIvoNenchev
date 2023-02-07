function shareItemComponent(props) {
	const buttonID = 'sf-share-item-button';
	const iframeRef = SF.react.useCallback((node) => {
		if (node) {
			node.addEventListener('load', function () {
				const style = document.createElement('style');
				style.innerHTML = `
                    /* width */
                    ::-webkit-scrollbar {
                        width: 6px;
                    }
                    /* Track */
                    ::-webkit-scrollbar-track {
                        background: #f1f1f1; 
                    }
                    /* Handle */
                    ::-webkit-scrollbar-thumb {
                        background: #cecece; 
                    }
                    /* Handle on hover */
                    ::-webkit-scrollbar-thumb:hover {
                        background: #acacac; 
                    }
                    body {
                        overflow-y: auto !important; 
                        scrollbar-width: thin;
                    }
                    div.od-ShareMain-Header button {
                        display: none !important;
                    }
                    div.od-ShareNotification button {
                        display: none !important;
                    }
                `;

				const btnClose = node.contentWindow.document.querySelector('div.od-ShareMain-Header button');
				const iframeHtml = node.contentWindow.document.querySelector('html head');

				console.log(iframeHtml);

				iframeHtml.appendChild(style);
				btnClose.remove();
			});
		}
	}, []);

	const [isVisible, toggleVisible] = SF.react.useState(false);
	const [iframeURL, setURL] = SF.react.useState('');

	SF.react.useEffect(() => {
		SF.registerCommand({
			// possible properties for buttons see FabricUI's ICommandBarItemProps/IContextualMenuItem interface
			key: 'Example.ShareItem', // in order to show up as a Form action button if the toolbar is disabled the key must start with "Form."
			id: buttonID,
			text: SF.localize({ en: 'Share', de: 'Tailen' }), // button caption
			weight: 123, // heavier is at the end, default is 0
			iconProps: { iconName: 'Share' },
			iconOnly: false, // see FabricUI's icon names (note: check on stand-alone and AllItems pages whether icons are available)
			onClick: () => {
				const selection = SF.currentValues.listViewSelection;
				const selectedItemID = selection.getSelection()[0].ID;

				setURL(`${SF.currentValues.webUrl}/_layouts/15/sharedialog.aspx?listId={${SF.currentValues.listId}}&listItemId=${selectedItemID}&clientId=sharePoint&ma=0`);
				toggleVisible(true);
			},
			checkVisible: (isContextMenu) => {
				if (!isContextMenu) {
					return false;
				}

				const selection = SF.currentValues.listViewSelection;
				const selectedItems = selection.getSelection();

				if (selectedItems.length == 1) {
					return true;
				}
			}, // optional - callback called when rendering the command to determine whether it is visible or hidden
		});
	}, [props.registerCommandFlag]);

	const formUI =
		isVisible &&
		SF.react.createElement(
			SF.controlTypes.Dialog,
			{
				style: { padding: 0 },
				dialogContentProps: { showCloseButton: true, type: 0 /*normal*/ },
				modalProps: { isBlocking: false /*false for light-dismiss*/ },
				onDismiss: () => {
					toggleVisible(false);
				},
				hidden: false, // required to see it
			},
			SF.react.createElement('iframe', {
				ref: iframeRef,
				id: 'custom-share-iframe',
				src: `${iframeURL}`,
				style: { height: '410px', width: '360px', border: 0, marginRight: -9 },
			})
		);

	return formUI;
}

const container = document.createElement('div'); // this is where React will render into
document.body.appendChild(container);
SF.reactDOM.render(SF.react.createElement(shareItemComponent, { registerCommandFlag: true }), container); // start rendering
