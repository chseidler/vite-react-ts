import React from 'react';
import { ModalProps } from './ModalProps.interface';
import { ElButton } from '..';

interface ModalState extends ModalProps {
    isOpen: boolean
}

const getDefaultState = (): ModalState => {
  return {
    testId: 'testid-not-set',
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm?',
    title: 'Do you confirm this action?',
    longDesc: undefined,
    primaryButtonType: 'primary',
    icon: undefined,
    iconAddCss: undefined,
    isOpen: false
  };
};

export class ElModal extends React.Component<ModalProps, ModalState> {
  private privateResolve!: (value: boolean | PromiseLike<boolean>) => void;

  constructor(props: ModalProps) {
    super(props);

    this.state = {
      ...getDefaultState(),
      ...props
    };
  }

  public updateProps = (updatedProps: ModalProps) => {
    this.state = {
      ...getDefaultState(),
      ...updatedProps
    };
  };

  private open = () => {
    this.setState({ isOpen: true });
  };

  private close = () => {
    this.setState({ isOpen: false });
  };

  private onCancelClick = () => {
    this.close();
    this.privateResolve(false);
  };

  private onConfirmClick = () => {
    this.close();
    this.privateResolve(true);
  };

  private cssClass = () => {
    const result = [
      'fixed',
      'z-10',
      'inset-0',
      'overflow-y-auto',
      'transform',
      'transition-all',
    ];

    return result.join(' ').trim();
  };

  public prompt = async (title: string) => {
    this.setState({ ...this.state, title: title });
    this.open();

    return new Promise<boolean>(resolve => {
      this.privateResolve = resolve;
    });
  };

  private renderIconSection = () => {
    if (!this.state.icon) {
      return null;
    }

    return React.createElement('div', {
      key: 'modal-icon-section',
      className:
        'mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100',
    }, [
      React.createElement(this.state.icon, {
        'key': 'modal-icon',
        'addCss': this.state.iconAddCss || ''
      })
    ]);
  };

  private renderDescription = () => {
    if (!this.state.longDesc) {
      return;
    }

    return React.createElement('div', {
      'key': 'modal-long-desc-section',
      'className': 'mt-2'
    }, [
      React.createElement('p', {
        'key': 'modal-long-desc-text',
        'className': 'text-sm text-gray-500 text-center'
      }, this.state.longDesc)
    ]);
  };

  private renderTextSection = () => {
    return React.createElement('div', {
      'key': 'modal-text-section',
      'className': 'mt-3 text-center sm:mt-5'
    }, [
      React.createElement('h3', {
        'key': 'modal-title',
        'className': 'text-lg leading-6 font-medium'
      }, this.state.title),
      this.renderDescription()
    ]);
  };

  private renderButtonSection = () => {
    return React.createElement(
      'div',
      {
        key: 'modal-panel',
        className:
          'mt-5 sm:mt-6 grid gap-3 sm:grid-cols-2 sm:grid-flow-row-dense',
      },
      [
        React.createElement(ElButton, {
          key: 'btn-modal-cancel',
          id: 'btn-modal-cancel',
          buttonType: 'secondary',
          disabled: false,
          label: this.state.cancelLabel,
          addCss: 'ml-2',
          onClicked: this.onCancelClick,
        }),
        React.createElement(ElButton, {
          key: 'btn-modal-confirm',
          id: 'btn-modal-confirm',
          buttonType: this.state.primaryButtonType || 'primary',
          disabled: false,
          label: this.state.confirmLabel,
          addCss: 'ml-2',
          onClicked: this.onConfirmClick,
        }),
      ]
    );
  };

  private renderModalPanel = () => {
    return React.createElement('div', {
      key: 'modal-panel',
      className:
        'relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6',
    }, [
      this.renderIconSection(),
      this.renderTextSection(),
      this.renderButtonSection()
    ]);
  };

  private renderInnerDiv = () => {
    return React.createElement(
      'div',
      {
        key: 'inner-div',
        className:
          'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0',
      },
      [
        React.createElement('div', {
          key: 'background-overlay',
          className: 'fixed inset-0 bg-gray-400 bg-opacity-75',
          'aria-hidden': true,
        }),
        React.createElement(
          'div',
          {
            key: 'trick-div',
            className: 'hidden sm:inline-block sm:align-middle sm:h-screen',
            'aria-hidden': true,
          },
          '\u200B'
        ),
        this.renderModalPanel(),
      ]
    );
  };

  render() {
    if (!this.state.isOpen) {
      return null;
    }

    return React.createElement(
      'div',
      {
        'data-testid': this.state.testId,
        className: this.cssClass(),
        'aria-labelledby': 'modal-title',
        role: 'dialog',
        'aria-modal': true,
      },
      this.renderInnerDiv()
    );
  }

}