import * as React from 'react';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {Content} from './style';
import {AppState} from 'store';

interface ToastProps {
  isVisible?: boolean;
  content: string;
}

const Toast = (props: ToastProps) => {
  const {isVisible, content} = props;
  return (
    <Modal isVisible={isVisible}>
      <Content>{content}</Content>
    </Modal>
  );
};

export default connect(
  (state: AppState) => ({
    isVisible: state.global.toast.visible,
    content: state.global.toast.content,
  }),
  {},
)(Toast);
