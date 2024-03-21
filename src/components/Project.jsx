import {projects} from '../constants'
import Button from './Button'


const ProjectCard = ({id, paragraph, img, index}) => (
    <div>

    <div className={` flex-1 max-w-[992px] h-[524px] bg-white mb-20 rounded-[24px] ${index % 2 === 0 ? 'flex' : 'hidden'} `}> 
        <div className='flex flex-col flex-1 justify-center items-start px-16 '>
            <h1 className='font-playfair font-bold text-[50px] mb-3'>{id}</h1>
            <p className='font-comfortaa font-medium text-[14px] leading-relaxed mb-3'>{paragraph}</p>
            <Button style='rounded-[24px] border-black border-[1px]' name='View Project' />
        </div>
        
        <img src={img} className=' flex-1 object-contain rounded-r-[24px]' />
    </div>
    <div className={` flex-1 max-w-[992px] h-[524px] bg-white mb-20 rounded-[24px] ${index % 2 === 0  ? 'hidden' : 'flex'} `}> 
        
        <img src={img} className=' flex-1 object-contain rounded-l-[24px]' />
        <div className='flex flex-col flex-1 justify-center items-start px-16 '>
            <h1 className='font-playfair font-bold text-[50px] mb-3'>{id}</h1>
            <p className='font-comfortaa font-medium text-[14px] leading-relaxed mb-3'>{paragraph}</p>
            <Button style='rounded-[24px] border-black border-[1px]' name='View Project' />
        </div>
    </div>

    </div>
)


const Project = () => (
    <section className='flex flex-col items-center'>
        <h1 className='font-playfair font-bold text-[64px]'>Projects</h1>
        <div className='w-[100px] h-[4px] bg-yellow-400 mb-20'></div>
        {projects.map((project,index) => (
           <ProjectCard key={project.id} {...project} index={index} />
        ))}
    </section>
)

export default Project