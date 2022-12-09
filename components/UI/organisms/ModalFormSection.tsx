import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Button from '../atoms/button/Button';
import InputField from '../atoms/input/InputField';
import TextareaField from '../atoms/input/TextareaField';
import TagList from '../molecules/TagList';

import dataListSlice from '../../../redux/slice/dataListSlice';
import ModalContext from '../../../context/modal/modalContext';

import type { DataItemType } from '../../../data/dataList';
import type { RootState } from '../../../redux/store/store';

const ModalFormSection = ({ type, data }: { type: 'Edit' | 'Add'; data?: DataItemType }) => {
  const [titleValue, setTitleValue] = useState(type === 'Edit' ? data!.title : '');
  const [descValue, setDescValue] = useState(type === 'Edit' ? data!.description : '');
  const [tagValue, setTagValue] = useState('');
  const [tagList, setTagList] = useState(type === 'Edit' ? data!.tags : []);

  const handleChangeTitleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value);
  };

  const handleChangeDescValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescValue(event.target.value);
  };

  const handleChangeTagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(event.target.value.trim());
  };

  const handleKeyDownTagInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ' && tagValue.length !== 0 && !tagList.includes(tagValue.trim())) {
      setTagList((prev) => [...prev, tagValue.trim()]);
      setTagValue('');
    } else if (event.key === 'Backspace' && tagValue.length === 0) {
      const newTagList = [...tagList];
      newTagList.pop();
      setTagList(newTagList);
    }
  };

  const handlePasteTagInput = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pastedTagValue = event.clipboardData.getData('text').trim();
    const pastedTagList = [...new Set(pastedTagValue.split(/\s+/))];

    const newTagList = new Set([...tagList, ...pastedTagList]);

    setTagList([...newTagList].slice(0, 3));
    setTagValue('');
  };

  const { hideModalHandler } = useContext(ModalContext)!;
  const handleClickCancelButton = () => {
    hideModalHandler();
  };

  const dispatch = useDispatch();
  const handleClickEditButton = () => {
    const editedData = {
      id: data!.id,
      title: titleValue,
      description: descValue,
      tags: tagList,
      createdAt: data!.createdAt
    };

    if (tagValue.length !== 0 && tagList.length < 3 && !editedData.tags.includes(tagValue.trim())) {
      editedData.tags = [...tagList, tagValue];
    }

    dispatch(dataListSlice.actions.editItem(editedData));
    hideModalHandler();
  };

  const dataList = useSelector((store: RootState) => store.data);
  const router = useRouter();
  const handleClickAddButton = () => {
    const editedData = {
      id: dataList.length + 1,
      title: titleValue,
      description: descValue,
      tags: tagList,
      createdAt: new Date().toLocaleDateString().replace(/\.\s/g, '-').replace(/\./, '')
    };

    if (tagValue.length !== 0 && tagList.length < 3 && !tagList.includes(tagValue)) {
      editedData.tags = [...tagList, tagValue];
    }

    dispatch(dataListSlice.actions.addItem(editedData));
    hideModalHandler();

    if (router.pathname !== '/') {
      router.replace('/');
    }
  };

  const handleClickTagItem = (tagIndex: number) => {
    return () => {
      const newTagList = tagList.filter((_, index) => index !== tagIndex);
      setTagList(newTagList);
    };
  };

  const isFormValid =
    titleValue.trim().length !== 0 && descValue.trim().length !== 0 && tagList.length !== 0;

  return (
    <ModalFormSectionWrapper>
      <h2>{type} Item</h2>
      <div className='titleInput'>
        <InputField
          value={titleValue}
          onChange={handleChangeTitleValue}
          placeholder='Title'
          maxLength={40}
        />
      </div>
      <div className='descInput'>
        <TextareaField
          value={descValue}
          onChange={handleChangeDescValue}
          placeholder='Description'
          maxLength={1000}
          rows={8}
        />
      </div>
      <div className='tagInput'>
        <TagList tags={tagList} handleClickTagItem={handleClickTagItem} />
        <InputField
          value={tagValue}
          disabled={tagList.length >= 3 ? true : false}
          onChange={handleChangeTagInput}
          onKeyDown={handleKeyDownTagInput}
          onPaste={handlePasteTagInput}
          placeholder='Tag'
        />
      </div>
      <div className='buttonGroup'>
        <Button bgColor='#e74c3c' onClick={handleClickCancelButton}>
          Cancel
        </Button>
        <Button
          bgColor='#0066ff'
          onClick={type === 'Edit' ? handleClickEditButton : handleClickAddButton}
          disabled={!isFormValid}
        >
          {type}
        </Button>
      </div>
    </ModalFormSectionWrapper>
  );
};

const ModalFormSectionWrapper = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  .titleInput {
    margin-bottom: 10px;
  }

  .descInput {
    margin-bottom: 10px;
  }

  .tagInput {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    border: 1px solid #d4d4d4;
    border-radius: 10px;
  }

  .tagInput input {
    border: none;
  }

  .buttonGroup {
    align-self: flex-end;

    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default ModalFormSection;
