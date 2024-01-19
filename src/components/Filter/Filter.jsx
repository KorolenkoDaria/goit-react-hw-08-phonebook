import { Label } from "../ContactForm/ContactForm.styled";
import { Wrapper, Field, Input, } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";

import { setFilter } from '../../redux/filter/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const handleFilter = (evt) => {
        dispatch(setFilter(evt.currentTarget.value.toLowerCase()));
    }

    return (
        <Wrapper>
            <Field>
                <Label htmlFor='filter'>  </Label>
                <Input onChange={handleFilter} value={filter} id='filter' type="text" name="filter" placeholder="Find contacts by name" required />
            </Field>
        </Wrapper>
    )

}

export default Filter;
