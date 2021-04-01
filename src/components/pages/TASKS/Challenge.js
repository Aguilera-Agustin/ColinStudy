import { Typography } from '@material-ui/core'
import React from 'react'

export const Challenge = () => {
    return (
        <div>
            <Typography variant="body2">Implementar el método sumarPosicionesPares de la clase SumadorArreglo que reciba un arreglo de enteros y devuelva la suma de los elementos que se encuentran en posiciones pares (incluido el elemento de la posición 0).
Por ejemplo: dado el arreglo [1, 2, 13 ,4, 8, 6] devuelve 22 (1+13+8)</Typography>
<pre style={{background:'#ededed'}}>
        <code>
            {
            `
public class SumadorArreglo {
    /*
    * Escribir una función que reciba un arreglo de enteros y devuelva la suma de los elementos que 
    * se encuentran en posiciones pares (incluido el elemento de la posición 0).
    * Por ejemplo: 
    * Dado el arreglo [1, 2, 13 ,4, 8, 6] devuelve 22 (1+13+8)
    */
    public int sumarPosicionesPares(int[] arreglo) {
        // Implementar...
    }
}`

            }
        </code>
</pre>

            <Typography variant="body2">El método debe pasar los siguientes Tests:</Typography>
<pre style={{background:'#ededed'}}>
        <code>
            {
            `
    public class TestSumadorArreglo {

        private SumadorArreglo sumador = new SumadorArreglo();
                
        @Test
        public void sumarArregloVacioDevuelveCero() {
            
            //Prepación
            int[] arregloTest = {};
            
            //operaciónn
            int resultado = sumador.sumarPosicionesPares(arregloTest);
            
            //verficación
            Assert.assertEquals(0, resultado);
        }
        
        @Test(expected = Error.class)
        public void sumarArregloNuloDevuelveError() {
            
            //Prepación
            int[] arregloTest = null;
                
            //operaciónn
            sumador.sumarPosicionesPares(arregloTest);
        }
        
        @Test
        public void sumarArregloDeTamanoPar() {
            
            //Prepación
            int[] arregloTest = {1, 2, 13 ,4, 8, 6};
                        
            //operaciónn
            int resultado = sumador.sumarPosicionesPares(arregloTest);
            
            //verficación
            Assert.assertEquals(22, resultado);
        }
        
        @Test
        public void sumarArregloDeTamanoParImpar() {
            
            //Prepación
            int[] arregloTest = {1, 2, 13 ,4, 8, 6, -22};
                        
            //operaciónn
            int resultado = sumador.sumarPosicionesPares(arregloTest);
            
            //verficación
            Assert.assertEquals(0, resultado);
        }
    
    }
}`

            }
        </code>
</pre>  
        </div>
    )
}
