export default function Modal({ isOpen, onClose, children }) {
  const handleClose = () => {
    onClose()
  }

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-50">
          <div className="bg-white rounded-lg w-[90%] h-[90%] mx-auto lg:mt-[2.5%] mt-[10%]">
            <div className="w-[95%] mx-auto">
              <button
                className="my-3 w-full text-right text-[#001959] text-lg font-bold"
                onClick={handleClose}
              >
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
