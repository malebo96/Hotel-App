import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',   
      transform: 'translate(-50%, -50%)',
    },    
  };

export default function OpenModal() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = 'blue';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div>
       <button style={{margin:30, width: 200, height: 50, backgroundColor: 'gray', color: 'white', marginTop: -20, borderRadius:10}} onClick={openModal}>Comfirm booking</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Thanks for booking into our app"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>You have successfully booked the room</h2>
        <button onClick={closeModal}>close</button>
        {/* <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>    
    </div>
  )
}
