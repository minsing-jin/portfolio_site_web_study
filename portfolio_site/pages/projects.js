import Layout from '../components/layout';
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}){
	//console.log(projects); // -> 클라에서 불러온 데이터 / jeffery가 말한 데이터가 잘 들어왔는가 검사하는 코드
	
	return (
	<Layout>
			
		<div className ="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
		<Head>
			<title>제발 되라 슈벌</title>
			<meta name="description" content="리눅스는 억까의 세계다." />
			<link rel="icon" href="/favicon.ico" />
        </Head>
		
		<h1 className="text-4xl font-bold sm:text-6xl">
			총 프로젝트 : 
			<span className="pl-4 text-blue-500"> {projects.results.length} </span>
			</h1>		
		
			
		<div className="grid grid-cols-1 md:grid-cols-2 py-10 m-5 gap-8 w-full">
		
			{projects.results.map((aProject) => (
			<ProjectItem key={aProject.id} data={aProject}/>
			))}

		</div>		
		</div>
		
			
	</Layout>
	)
	 //리엑트에서 로직처리를 하려면 중괄호
}

// Build time에 호출 / 서버 부분
export async function getStaticProps() {  
	
  const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'Notion-Version': '2022-02-22',
    'content-type': 'application/json',
	Authorization: `Bearer ${TOKEN}`
	  },
	  body: JSON.stringify({
		  sorts: [
			  {
				  "property": "Name",
				  "direction": "ascending"
			  }
		  ],
		 
		  page_size: 100
	  
	  })
	};

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const projects = await res.json()
  
 
  //console.log(projects);
	
  if (projects.results != null) {
	  
  const projectNames = projects.results?.map((aProject) => (
  	aProject.properties.Name.title[0].plain_text
  ));
	  
	  
  //console.log(`projectIds : ${projectNames}`);
	  
  return {
  props: {projects}, // will be passed to the page component as props
  }
	  
  }
	

	
  
}



// 할것들: 왜 projects값을 prop으로 넘겨주면 못받을까? 계속 이걸 못받아서 문제가 됌.