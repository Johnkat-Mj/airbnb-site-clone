import { LucideX } from 'lucide-react'
import React, { createContext, useContext, useRef, useState } from 'react'
import { CSSTransition, Transition } from 'react-transition-group'


const ModalContext = createContext()

const useModalContext = () => {
  return useContext(ModalContext)
}

function Modal({ children }) {
  const [showModal, setshowModal] = useState(false)

  const toggleModal = () => {
    setshowModal(showModal => !showModal)
  }

  const setModalshow = () =>{
    setshowModal(() => true)
  }
  const closeModal = () => {
    setshowModal(() => false)
  }

  return (
    <ModalContext.Provider value={{ showModal, toggleModal, closeModal, setModalshow }}>
      <div className='relative z-100'>
      {children}
      </div>
    </ModalContext.Provider>
  )
}

function Trigger({ children }) {

  const { showModal, setModalshow } = useModalContext()
  return <button onClick={() => {
    setModalshow()
    document.body.classList.add("!overflow-y-hidden")
  }} className='flex outline-none items-center'>
    {children}
  </button>
}

function Content({ children }) {
  const { showModal, closeModal } = useModalContext()

  const contentRef = useRef(null)
  return (

    <>
      <CSSTransition in={showModal}
        nodeRef={contentRef}
        timeout={300}
        classNames={`mymodal`}
        unmountOnExit>
        <div className="fixed bottom-0 inset-0 flex justify-center md:items-center z-100">
          {showModal ? (
            <div className="fixed inset-0  bg-gray-800/50" onClick={() => {
              closeModal()
              document.body.classList.remove("!overflow-y-hidden")
            }} />
          ) : null
          }
          <div ref={contentRef} className="w-full text-gray-600 relative lg:max-w-5xl md:h-[80dvh] bg-white rounded-t-lg md:max-w-2xl md:rounded-lg">
            <div className="border-b z-100 border-b-gray-200 py-3 px-4 sm:px-6 md:px-8 flex items-center">
              <button className="outline-none" onClick={() => {
                closeModal()
              }}>
                <LucideX size={25} />
              </button>
            </div>
            <div className="px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

Modal.Trigger = Trigger
Modal.Content = Content


export { Modal }
