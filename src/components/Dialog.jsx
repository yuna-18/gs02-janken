
const Dialog = () => {
  return (
    <div className="dialog__container">
      <div className="dialog__outer">
        <div className="close-btn dialog-btn">✕</div>
        <div className="dialog__content">
          <p>この金額でよろしいですか？</p>
          <div className="btn__outer">
            <button className="dialog-btn yes">はい</button>
            <button className="dialog-btn no">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog