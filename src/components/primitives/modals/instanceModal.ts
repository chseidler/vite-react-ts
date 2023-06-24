import React from 'react';

import ReactDOM from 'react-dom';

import { ElModal } from './ElModal';
import { ModalProps } from './ModalProps.interface';

let instance!: any;
const domTargetId = 'modal';

export const instanceModal = (props: ModalProps) => {
  if (!instance) {
    let domTarget = document.getElementById(domTargetId);

    if (!domTarget) {
      domTarget = document.createElement('div');
      domTarget.setAttribute('id', domTargetId);
      document.body.appendChild(domTarget);
    }

    const reactModal = React.createElement(ElModal, props, null);

    instance = ReactDOM.render(reactModal, domTarget);
  }

  instance.updateProps(props);

  return instance;
};