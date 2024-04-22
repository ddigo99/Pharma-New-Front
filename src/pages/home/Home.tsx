import './Home.css';
//import logo from "src/assets/logonew.svg";


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Ola, bom ter voce por aqui</h2>
              <p className='text-xl'>Todos os produto necessários para o seu bem estar, esta aqui</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
      
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;