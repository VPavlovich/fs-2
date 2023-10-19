// class BackButton {
//   static back() {
//     return window.history.back()
//   }
// }

// window.backButton = BackButton
// import "./index.css";

export default function Component() {
  return (
    <div class="back-button" onclick="backButton.back();">
      <img src="/svg/back-button.svg" alt="<" width="24" height="24" />
    </div>
  );
}
