import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/imageModal';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <Image src={urls.small} alt={alt} onClick={openModal} />
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const Image = styled.img`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default PhotoItem;
