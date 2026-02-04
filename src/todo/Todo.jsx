export default function Todo({ text, isCompleted, isDelected = false }) {
  if (isDelected) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "√"}
      </li>
    );
  }
}
