import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import Button from './ui/button'

const ListForm = styled.div`
    width: 450px;
    height: 600px;
    margin-right: 280px;
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
`

const Checkbox = styled.input`
    margin-right: 20px;
    accent-color: orange;
`

const ItemText = styled.span`
    font-size: 18px;
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

const CheckList = ({ currentDay, onUpdate }) => {
    const [listText, setListText] = useState('');
    const [submittedValues, setSubmittedValues] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [newText, setNewText] = useState('');

    const currentMonth = dayjs(currentDay).format('YYYY-MM');

    useEffect(() => {
        const storedData = localStorage.getItem('checklistData');
        const parsedData = storedData ? JSON.parse(storedData) : {};

        if (parsedData[currentMonth] && parsedData[currentMonth][currentDay]) {
            setSubmittedValues(parsedData[currentMonth][currentDay]);
        } else {
            setSubmittedValues([]);
        }
    }, [currentDay, currentMonth]);

    const handleChange = (listText) => setListText(listText);

    const handleSubmit = () => {
        if (listText.trim()) {
            const newItem = { text: listText, checked: false };
            const newValues = [...submittedValues, newItem];

            setSubmittedValues(newValues);
            saveDataToLocal(newValues);
            setListText('');
            onUpdate();
        }
    };

    const handleItemCheck = (index) => {
        const updatedValues = [...submittedValues];
        updatedValues[index].checked = !updatedValues[index].checked;

        setSubmittedValues(updatedValues);
        saveDataToLocal(updatedValues);
        onUpdate();
    }

    const handleModify = (index) => {
        setEditIndex(index);
        setNewText(submittedValues[index].text);
    };

    const handleSave = (index) => {
        const updatedValues = submittedValues.map((item, i) => 
            i === index ? {...item, text: newText} : item
        )
        
        setSubmittedValues(updatedValues);
        setEditIndex(null);
    }


    const handleDelete = (index) => {
        const updatedSubmittedValues = submittedValues.filter((_, i) => i !== index);
        setSubmittedValues(updatedSubmittedValues);

        saveDataToLocal(updatedSubmittedValues);
        onUpdate();
    }

    const saveDataToLocal = (newValues) => {
        const storedData = JSON.parse(localStorage.getItem('checklistData') || '{}');
        const updateData = {
            ...storedData,
            [currentMonth]: {
                ...storedData[currentMonth],
                [currentDay]: newValues,
            },
        };

        localStorage.setItem('checklistData', JSON.stringify(updateData));
    }

    return (
        <ListForm>
            <h4 style={{ marginLeft: '20px' }}>{currentDay}</h4>
            <ValueDisplay>
                {submittedValues.map((item, index) => (
                    <ListItem key={index}>
                        <Checkbox
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleItemCheck(index)}
                        />
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                onBlur={() => handleSave(index)}
                                autoFocus
                                style={{ height:'20px', fontSize: '16px' }}
                            />
                        ) : (
                            <ItemText>{item.text}</ItemText>
                        )}
                        <Button onClick={() => handleModify(index)} marginLeft="20px">✏️</Button>
                        <Button onClick={() => handleDelete(index)}>❌</Button>
                    </ListItem>
                ))}
            </ValueDisplay>

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