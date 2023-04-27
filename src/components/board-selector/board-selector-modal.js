import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from './board-selector-modal.css';

class BoardSelectorModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onCloseModal}
        contentLabel="Board Selector Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}>
        <div className={styles.header}>Select Board</div>
        <div className={styles.popupGrid}>
          <div>
            <img src= {require('./AI_IOT.gif')}></img>
            <button onClick={() => this.props.onSelectBoard('ai')}>AI_IOT</button>
          </div>
          <div>
            <img src={require('./AIR_Board.png')}></img>
            <button onClick={() => this.props.onSelectBoard('air')}>AIR_Board</button>
          </div>
          <div>
            <img src={require('./AIR_devBoard.png')}></img>
            <button onClick={() => this.props.onSelectBoard('dev')}>AIR_devBoard</button>
          </div>
          
        </div>

        <button onClick={this.props.onCloseModal}>Close</button>
      </Modal>
    );
  }
}

BoardSelectorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onSelectBoard: PropTypes.func.isRequired
};

export default BoardSelectorModal;