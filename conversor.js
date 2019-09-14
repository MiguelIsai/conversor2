
const longitud=()=>{
    document.getElementById("sumaDiv").style.display="block";
    document.getElementById("restaDiv").style.display="none";
    document.getElementById("multiDiv").style.display="none";
    document.getElementById("numero1").value="";
    document.getElementById("numero2").value="";
    document.getElementById("respSuma").innerHTML="";
}

const velocidad=()=>{
    document.getElementById("restaDiv").style.display="block";
    document.getElementById("sumaDiv").style.display="none";
    document.getElementById("multiDiv").style.display="none";
    document.getElementById("numRes1").value="";
    document.getElementById("numRes2").value="";
    document.getElementById("respRestar").innerHTML="";
}
const masa=()=>{
    document.getElementById("multiDiv").style.display="block";
    document.getElementById("sumaDiv").style.display="none";
    document.getElementById("restaDiv").style.display="none";
    document.getElementById("numM1").value="";
    document.getElementById("numM2").value="";
    document.getElementById("respMulti").innerHTML="";
}

const metros=()=>{
    let selectedValue = document.getElementById("lista").value;
    let selectedValue2 = document.getElementById("lista2").value;
    //alert(selectedValue + " y " + selectedValue2);
    if (selectedValue =="metro" && selectedValue2=="centimetro"){
      let r=document.getElementById("campo1").value * 100;
        document.getElementById("respSuma").innerHTML="Multiplique la base por 100";
        document.getElementById("Resul1").value=r;
       // alert(selectedValue + " y " + selectedValue2);
    }else if (selectedValue =="metro" && selectedValue2=="milimetro"){
        let r=document.getElementById("campo1").value * 1000;
          document.getElementById("respSuma").innerHTML="multiplique el valor por 1000";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="centimetro" && selectedValue2=="metro"){
        let r=document.getElementById("campo1").value / 100;
          document.getElementById("respSuma").innerHTML="divide el valor entre 100";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="centimetro" && selectedValue2=="milimetro"){
        let r=document.getElementById("campo1").value * 10;
          document.getElementById("respSuma").innerHTML="multiplica el valor de longitud por 20";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="milimetro" && selectedValue2=="metro"){
        let r=document.getElementById("campo1").value / 100;
          document.getElementById("respSuma").innerHTML="divide el valor de longitud entre 100";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="milimetro" && selectedValue2=="centimetro"){
        let r=document.getElementById("campo1").value / 10;
          document.getElementById("respSuma").innerHTML="divide el valor de longitud entre 10";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="metro" && selectedValue2=="metro"){
        let r=document.getElementById("campo1").value * 1;
          document.getElementById("respSuma").innerHTML="Un metro es un metro ";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="centimetro" && selectedValue2=="centimetro"){
        let r=document.getElementById("campo1").value * 1;
          document.getElementById("respSuma").innerHTML="Un centimetro es un centimetro ";
          document.getElementById("Resul1").value=r;
    }else if (selectedValue =="milimetro" && selectedValue2=="milimetro"){
        let r=document.getElementById("campo1").value * 1;
          document.getElementById("respSuma").innerHTML="Un milimetro es un milimetro ";
          document.getElementById("Resul1").value=r;
    }
}

const medidaTiempo=()=>{

  let valorTiempo1 = document.getElementById("listaTiempo1").value;
  let valorTiempo2 = document.getElementById("listaTiempo2").value;
  //alert(valorTiempo1 + " y " + valorTiempo2);
  if (valorTiempo1 =="Hora" && valorTiempo2=="Minuto"){
      let r=document.getElementById("ResulT1").value * 60;
      document.getElementById("respSuma").innerHTML="Multiplica el valor por 60";
      document.getElementById("ResulT2").value=r;
  }else if (valorTiempo1 =="Hora" && valorTiempo2=="Segundo"){
    let r=document.getElementById("ResulT1").value * 3600;
    document.getElementById("respSuma").innerHTML="Multiplica el valor por 3600";
    document.getElementById("ResulT2").value=r;
  }else if (valorTiempo1 =="Minuto" && valorTiempo2=="Hora"){
      let r=document.getElementById("ResulT1").value / 60;
      document.getElementById("respSuma").innerHTML="Divide el entre 60"
      document.getElementById("ResulT2").value=r;
    }else if (valorTiempo1 =="Minuto" && valorTiempo2 =="Segundo"){
      let r=document.getElementById("ResulT1").value * 60;
      document.getElementById("respSuma").innerHTML="Multiplique el valor por 60";
      document.getElementById("ResulT2").value=r;
    }else if (valorTiempo1 =="Segundo" && valorTiempo2=="Hora"){
        let r=document.getElementById("ResultT1").value / 3600;
        document.getElementById("respSuma").innerHTML="Divide el valor entre 3600";
        document.getElementById("ResulT2").value=r;
      }else if (valorTiempo1 =="Segundo" && valorTiempo2 =="Minuto"){
        let r=document.getElementById("ResulT1").value / 60;
        document.getElementById("respSuma").innerHTML="Divide el valor entre 60";
        document.getElementById("ResulT2").value=r;
      }else if (valorTiempo1 =="Hora" && valorTiempo2=="Hora"){
        let r=document.getElementById("ResulT1").value * 1;
          document.getElementById("respSuma").innerHTML="Una hora es una hora";
          document.getElementById("ResulT2").value=r;
    }else if (valorTiempo1 =="Minuto" && valorTiempo2=="Minuto"){
        let r=document.getElementById("ResulT1").value * 1;
          document.getElementById("respSuma").innerHTML="Un minuto es un minuto ";
          document.getElementById("ResulT2").value=r;
    }else if (valorTiempo1 =="Segundo" && valorTiempo2=="Segundo"){
        let r=document.getElementById("ResulT1").value * 1;
          document.getElementById("respSuma").innerHTML="Un Segundo es un Segundo ";
          document.getElementById("ResulT2").value=r;
      }
    }
    const kilogramos=()=>{
      alert("holaaa  masa");
      let varMasa1 = document.getElementById("listaMasa1").value;
      let varMasa2 = document.getElementById("listaMasa2").value;
      //alert(varMasa1 + " y " + varMasa2);
      if (varMasa1 =="kilogramos" && varMasa2=="onza"){
        let r=document.getElementById("campo2").value * 35.274;
          document.getElementById("respSuma").innerHTML="Multiplique la base por 35.274";
          document.getElementById("Resul2").value=r;
         // alert(selectedValue + " y " + selectedValue2);
      }else if (varMasa1 =="kilogramos" && varMasa2=="libra"){
          let r=document.getElementById("campo2").value *2.2 ;
            document.getElementById("respSuma").innerHTML="multiplique el valor por 2.2";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1 =="libra" && varMasa2=="onza"){
          let r=document.getElementById("campo2").value *16;
            document.getElementById("respSuma").innerHTML="multiplique el valor por 16";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1 =="libra" && varMasa2=="kilogramos"){
          let r=document.getElementById("campo2").value /2.2;
            document.getElementById("respSuma").innerHTML="divide el valor de masa entre 2.2";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1=="onza" && varMasa2=="libra"){
          let r=document.getElementById("campo2").value /16;
            document.getElementById("respSuma").innerHTML="divide el valor de la masa entre 16";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1=="onza" && varMasa2=="kilogramos"){
          let r=document.getElementById("campo2").value /35.274;
            document.getElementById("respSuma").innerHTML="divide el valor de masa entre 35.274";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1=="kilogramos" && varMasa2=="kilogramos"){
          let r=document.getElementById("campo2").value * 1;
            document.getElementById("respSuma").innerHTML="Un kilogramo es un kilogramo";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1=="libra" && varMasa2=="libra"){
          let r=document.getElementById("campo2").value * 1;
            document.getElementById("respSuma").innerHTML="Una libra es una libra";
            document.getElementById("Resul2").value=r;
      }else if (varMasa1=="onza" && varMasa2=="onza"){
          let r=document.getElementById("campo2").value * 1;
            document.getElementById("respSuma").innerHTML="Una onza es una onza";
            document.getElementById("Resul2").value=r;
      }
     }

    