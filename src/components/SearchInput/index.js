import { Input } from 'semantic-ui-react';
import './styles.css'

function SearchInput({ onChange, onClick }) {
  return <Input
    className="search_button"
    action={{icon: 'search', onClick: _ => onClick()}}
    placeholder='Search...'
    onChange={event => onChange(event.target.value)}
  />
}

export default SearchInput;