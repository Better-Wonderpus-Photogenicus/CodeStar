import React from "react";

function SignDropdown (props) {
    return(
        <>
        <label for={props.id}>{props.text}</label>
        <select name={props.id} id={props.id}>
            <option value={0}>Aries</option>
            <option value={1}>Taurus</option>
            <option value={2}>Gemini</option>
            <option value={3}>Cancer</option>
            <option value={4}>Leo</option>
            <option value={5}>Virgo</option>
            <option value={6}>Libra</option>
            <option value={7}>Scorpio</option>
            <option value={8}>Sagittarius</option>
            <option value={9}>Capricorn</option>
            <option value={10}>Aquarius</option>
            <option value={11}>Pisces</option>
        </select>
        </>
    )
}

export default SignDropdown