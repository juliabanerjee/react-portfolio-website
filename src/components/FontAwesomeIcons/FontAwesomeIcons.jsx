import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faJava, faJsSquare, faLinkedin, faNpm, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons'

const FontAwesomeIcons = () =>{
library.add(fab, faJsSquare, faJava, faGithub, faNpm, faReact, faLinkedin, faEnvelope, faFileDownload, faDatabase  )
  return(
    <div className='experience__icons'>
      <FontAwesomeIcon icon={faJsSquare}/>
      <FontAwesomeIcon icon={faJava}/>
      <FontAwesomeIcon icon={faGithub}/>
      <FontAwesomeIcon icon={faNpm}/>
      <FontAwesomeIcon icon={faReact}/>
      
      <FontAwesomeIcon icon={faDatabase}/>

      <div className='contact__icons'>
      <FontAwesomeIcon icon={faEnvelope}/>
      <FontAwesomeIcon icon={faLinkedin}/>
      <FontAwesomeIcon icon={faGithub}/>
      <FontAwesomeIcon icon={faFileDownload}/>

      </div>
    </div>
  )
}
export default FontAwesomeIcons;