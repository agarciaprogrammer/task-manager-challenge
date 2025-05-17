export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <select value={selected} onChange={e => onChange(e.target.value)}>
      <option value="">Todas las categorías</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
}
