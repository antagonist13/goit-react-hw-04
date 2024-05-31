import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar({ setSearchData }) {
  function validation(e) {
    if (e.target.value === "") {
      toast.error ("You need to make a request, empty field!")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    validation(e)
    setSearchData(e.target.value)
  }
  return <header>
    <Toaster/>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
    />
    <button type="submit">Search</button>
  </form>
</header>
}