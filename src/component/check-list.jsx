import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs';

const ListForm = styled.div`
    width: 450px;
    height: 600px;
    margin-top: 70px;
    margin-right: 270px;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`

const ValueDisplay = styled.ul`
    width: 100%;
    height: 500px;
    overflow-y: auto;
    padding-top: 10px;
    margin-bottom: 30px;
`

const ListItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const Checkbox = styled.input`
    margin-right: 20px;
    accent-color: orange;
`;

const ItemText = styled.span`
    font-size: 18px;
`;

const DeleteButton = styled.button`
    background-color: white;
    border: none;
    color: orange;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 20px;
`

const InputContainer = styled.div`
    width: auto;
    height: 30px;
    display: flex;
    margin-bottom: 10px;
`

const Input = styled.input`
    display: flex;
    width: 370px;
    height: 40px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    padding-left: 15px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`

const SubmitButton = styled.button`
    width: 50px;
    height: 40px;
    margin-top: 2px;
    margin-left: 13px;
    border-radius: 10px;
    background-color: orange;
    border: none;
    color: white;
    font-weight: bold;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`

const CheckList = ({ currentDay }) => {
    const [listText, setListText] = useState('');
    const [submittedValues, setSubmittedValues] = useState([]);
    const [checkedState, setCheckedState] = useState([]);

    const handleChange = (listText) => setListText(listText);

    const handleSubmit = () => {
        if (listText.trim()) {
            setSubmittedValues((prev) => [...prev, listText]);
            setCheckedState((prev) => [...prev, false]);
            setListText('');
        }
    };

    const handleItemCheck = (index) => {
        const updatedCheckedState = [...checkedState];
        updatedCheckedState[index] = !updatedCheckedState[index];
        setCheckedState(updatedCheckedState);
    }

    const handleDelete = (index) => {
        const updatedSubmittedValues = submittedValues.filter((_, i) => i !== index);
        setSubmittedValues(updatedSubmittedValues);
    }

  return (
    <ListForm>
        <h4 style={{marginLeft:'20px'}}>{dayjs(currentDay).format('YYYY-MM-DD')}</h4>
        {submittedValues && (
            <ValueDisplay>
                {submittedValues.map((item, index) => (
                    <ListItem key={index}>
                        <Checkbox 
                            type="checkbox"
                            checked={checkedState[index]}
                            onChange={() => handleItemCheck(index)}
                        />
                        <ItemText>{item}</ItemText>
                        <DeleteButton onClick={() => handleDelete(index)}>X</DeleteButton>
                    </ListItem>
                ))}
            </ValueDisplay>
        )}

        <InputContainer>
            <Input 
                value={listText}
                onChange={(e) => handleChange(e.target.value)}
                placeholder='오늘의 할 일을 입력해주세요'
            />
            <SubmitButton onClick={handleSubmit}>추가</SubmitButton>
        </InputContainer>
    </ListForm>
  )
}

export default CheckList