import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { Container, Content, Row, Content2 } from "./styles";

function App() {
  // Usando useState para trocar numero na tela da calc
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  // Função para limpar calculadora
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  // Função para adicionar numero e função botão
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)

  }

  // Usando useState para somar
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')

    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  };

  // Usando useState para subtração
  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }
    else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  };

  // Usando useState para multiplicação
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('X')

    }
    else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  };

  // Usando useState para Divisão
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')

    }
    else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  };

  // Usando useState para resultado
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'X':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;
      }

    }

  };


  return (
    <Container>
      <Content2>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="X" onClick={handleMultNumbers} />
            <Button label="/" onClick={handleDivNumbers} />
            <Button label="C" onClick={handleOnClear} />
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="=" onClick={handleEquals}  />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="0" onClick={() => handleAddNumber('0')} />
          </Row>
        </Content>
      </Content2>
    </Container>
  );
}

export default App;
