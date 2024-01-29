
export default function Toast({ message }) {
  return (
    <aside className="toast" data-testid="toast">
      <p><b>{message}</b></p>
    </aside>
  );
}
