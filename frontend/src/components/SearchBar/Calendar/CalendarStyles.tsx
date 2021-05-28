import styled from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const CalendarModalLayout = styled.div`
  position: absolute; //relative는 SearchBarLayout 입니다
  top: 100%;
  width: 100%;
  right: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  margin-top: 1.2rem;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 6px 20px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CalendarSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: #e6e6e6;
    border-radius: 100px;
    margin-top: 1.6rem;
    & > button {
      border-radius: 100px;
      border: none;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.8rem;
      font-weight: 600;
      background: #fff;
      color: rgb(34, 34, 34);
      padding: 3px 14px;
      margin: 4px 6px;
      outline: none;
      cursor: pointer;
      &:last-child {
        background-color: #e6e6e6;
        font-weight: 600;
        &:hover {
          background-color: #fff;
          transition: background-color 0.4s;
        }
        &:not(hover) {
          transition: background-color 0.2s;
        }
      }
    }
  }
`;

const CalendarLayout = styled.div`
  /* outline: red solid 1px; */
  width: 90%;
  margin: 1.6rem;
  padding: 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;

  .title-container {
    width: 100%;
    display: flex;
  }
`;

const LeftArrowBtn = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 99px;
  background-color: #fff;

  &:hover {
    background-color: rgb(247, 247, 247);
  }

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

const RightArrowBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 99px;
  background-color: #fff;

  &:hover {
    background-color: rgb(247, 247, 247);
  }

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

const CurrentMonth = styled.div`
  display: flex;
  border: 1px solid green;
  width: 50%;
  text-align: center;
  flex-direction: column;

  .calendar-container {
    width: 100%;
  }

  &:first-child {
    position: relative;
    display: flex;
    align-items: center;
  }

  .year_and_month {
    padding-top: 0.5rem;
    margin: 0 auto;
    width: auto;
    height: 2rem;
  }

  .days {
    width: 100%;
    font-weight: 300;
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    & > span {
      display: flex;
      align-items: center; 
      height: 2em;
      padding: 0.5rem 1rem;
    }
  }

  .dates {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center; //grid
    
    & > div {
      display: flex;
      align-items: center; //flex
      height: 5rem;
    }
  }
`;

const NextMonth = styled.div`
  display: flex;
  border: 1px solid green;
  width: 50%;
  text-align: center;
  flex-direction: column;

  &:last-child {
    position: relative;
    display: flex;
    /* border: 1px solid pink; */
    align-items: center;
  }

  .year_and_month {
    padding-top: 0.5rem;
    margin: 0 auto;
    width: auto;
    height: 2rem;
  }
`;

export {
  CalendarModalLayout,
  CalendarSelector,
  CalendarLayout,
  LeftArrowBtn,
  RightArrowBtn,
  CurrentMonth,
  NextMonth,
  RiArrowLeftSLine,
  RiArrowRightSLine,
};
