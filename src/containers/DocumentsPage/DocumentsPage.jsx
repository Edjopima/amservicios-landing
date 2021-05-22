import React from 'react';
import DocumentCard from '../../components/DocumentCard/DocumentCard';
import StyledDocumentPage from './StyledDocumentPage';
import {useSpring, animated} from 'react-spring';
import image from '../../Images/image.jpg'


const DocumentsPage = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })
  const documents = [
    {title:'prueba1', url:'www.google.com'},
    {title:'prueba2', url:'www.facebook.com'},
    {title:'prueba3', url:'www.twitter.com'},
    {title:'prueba4', url:'www.instagram.com'},
  ]
  return (
    <animated.div style={props}>
      <StyledDocumentPage backgroundImage={image}>
        <div className='container'>
          <h1>Solvencias</h1>
          <div className='documents' >
            {documents.map(document =>
              <DocumentCard
                title={document.title}
                url={document.url}
              />
            )}
          </div>
        </div>
      </StyledDocumentPage>
    </animated.div>
  );
}

export default DocumentsPage;