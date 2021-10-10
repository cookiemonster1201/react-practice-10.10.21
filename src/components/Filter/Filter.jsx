export default function Filter({ value, onChange }) {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
