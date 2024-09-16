import './App.css';

function App() {

  const handleDownload = () => {
    const fileUrl = '/assets/NetController.exe'; 
    const link = document.createElement('a');

    link.href = fileUrl;
    link.setAttribute('download', 'NetController.exe');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="assets/LogoNetController.png" alt="Logo NetController" id='LogoName' />
        <nav>
          <a href="https://cozacdev.com.br" target='_blank' rel="noreferrer" className='navIcon'><img src="assets/Portfolio.png" alt="Portfolio Logo" className='navIcon' /></a>
          <a href="https://www.linkedin.com/in/cozacvictor/" target='_blank' rel="noreferrer" className='navIcon'><img src="assets/LinkedIn.png" alt="LinkedIn Logo" className='navIcon' /></a>
        </nav>
      </header>
      <main>
        <div id='MainContainer'>
          <h1>Fique por Dentro das Quedas de Internet com o NetController</h1>
          <img src="assets/LogoImg.png" alt="Logo Brand NetController" id='Brand' />
        </div>
        <div id='MobileInverter'>
          <div id='InstructionContainer'>
            <div className='Card'>
              <h2>Baixe o NetController agora</h2>
              <p>Faça o download e fique pronto para monitorar suas conexoes de internet.</p>
            </div>
            <div className='Card'>
              <h2>Abra o Aplicativo e Comece</h2>
              <p>Duplo clique ou pressione "Executar" é tudo que você precisa para abrir o programa.</p>
            </div>
            <div className='Card'>
              <h2>Insira seu E-mail e Inicie</h2>
              <p>Coloque seu e-mail e deixe o NetController cuidar do resto, enviando alertas sempre que sua conexão cair e voltar.</p>
            </div>
          </div>
          <div id='DownloadContainer'>
            <label onClick={() => handleDownload()}  id='Download' >Download</label>
          </div>
        </div>
        <div id='ImportantContainer'>
          <p><span>Importante</span>: Fechar o aplicativo interrompe o monitoramento. O NetController só funciona com o dispositivo ligado e é compatível apenas com computadores.</p>
        </div>
      </main>
      <footer>
        <p>Desenvolvedor/Detentor dos direitos Cozacs</p>
      </footer>
    </div>
  );
}

export default App;
