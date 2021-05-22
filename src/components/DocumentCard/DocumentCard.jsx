import React from 'react';
import StyledDocumentCard from './StyledDocumentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const DocumentCard = ({title, url}) => {
  return (
    <StyledDocumentCard>
      <a href={url}>
        <h4>{title}</h4>
        <FontAwesomeIcon className='icon' icon={faDownload} />
      </a>
    </StyledDocumentCard>
  );
}

export default DocumentCard;