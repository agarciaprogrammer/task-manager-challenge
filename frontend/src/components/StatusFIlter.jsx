export default function StatusFilter({ selected, onChange }) {
  return (
    <select value={selected} onChange={e => onChange(e.target.value)}>
      <option value="">Todos los estados</option>
      <option value="pending">Pendientes</option>
      <option value="completed">Completadas</option>
    </select>
  );
}
