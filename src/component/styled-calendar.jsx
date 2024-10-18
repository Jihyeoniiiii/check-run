import styled from "styled-components";

export const StyledCalendarContainer = styled.div`
    .react-calendar {
        width: 700px;
        border-color: white;
        border-radius: 20px;
        margin: 200px auto;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }

    .react-calendar__navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;

        button {
            background: none;
            border: none;
            color: orange;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            flex-grow: 1;

            &:hover {
            }
        }
    }

    .react-calendar__viewContainer {
        padding: 20px;
        border-radius: 10px;

        button {
            background: none;
            border: none;
        }
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
    }

    .react-calendar__month-view__weekdays__weekday  {
        margin: 20px 0;
        
        abbr {
            line-height: 1.5;
            text-decoration: underline;
            text-decoration-thickness: 5px;
            text-decoration-color: orange;
            font-weight: bold;
        }
    }

    
    .react-calendar__month-view__days {
        button {
            padding: 30px;
        }
    }
`;