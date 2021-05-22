import React, { useEffect, useState } from 'react';
import StyledDocumentCard from './StyledDocumentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import {Dropbox} from 'dropbox'


const DocumentCard = ({title, path}) => {
  const [url, setUrl] = useState('');

  const ACCESS_TOKEN = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;
  const dbx=new Dropbox({accessToken: ACCESS_TOKEN})

  const getUrl = (path) => {
    dbx.filesGetTemporaryLink({path:path})
    .then(response=>setUrl(response.result.link))
    .catch(err=>console.log(err))
  };
  useEffect(()=>{
    getUrl(path)
  }, []);

  return (
    <StyledDocumentCard>
      <a href={url}>
        <h4>{title.slice(0,-4)}</h4>
        <FontAwesomeIcon className='icon' icon={faDownload} />
      </a>
    </StyledDocumentCard>
  );
}

export default DocumentCard;