import { FlatList } from 'react-native';
import  { Hamburguer } from '../Hamburguer';
import { Container, LogoBox, BoxMesa1, Mesa1, PratosBox, BurgerText, Frase, BurguersBox, BoxBackButton, BackButton, BackIcon, LogoImg } from './styles';
import  myburger from '../../../../assets/myburger.png';


type Props = {
    showBackButton?: boolean;
   
}

export function Cardapio2({ showBackButton = false}: Props){

    const hamburgueres = [''];

    return(
        <Container>
            <LogoBox>
                {
                showBackButton &&
                    <BoxBackButton>
                        <BackButton>
                            <BackIcon/>
                        </BackButton>
                    </BoxBackButton>
                }   
                   
            <LogoImg source = { myburger } />

            </LogoBox>  
                <BoxMesa1>
                    <Mesa1>
                        MESA 2
                    </Mesa1>
                </BoxMesa1>

            <PratosBox>
                <BurgerText>
                    HAMBÚRGUERES
                </BurgerText>
                <Frase>
                    "Nossos hambúrgueres são 100% deliciosos, feitos sem NENHUM corante, sabor artificial e conservante."
                </Frase>
            </PratosBox>

            <BurguersBox>
                
                <FlatList
                        data={hamburgueres}
                        keyExtractor={(_item, index) => index.toString()}
                        renderItem={() => (
                        <>
                            
                            <Hamburguer 
                                mesa1={'MESA 2'}  
                                numero={'1'} 
                                burgerName={'CHEESEBURGER CLÁSSICO'}
                                descricao={'Um suculento hambúrguer de carne grelhada coberto com uma fatia de queijo derretido, servido em um pão macio com ingredientes tradicionais como alface, tomate, picles e condimentos como ketchup e mostarda'}
                                valoritem= {25.00}
                                showAlert={true}
                                showAlert2={false}
                            />
                             <Hamburguer 
                                mesa1={'MESA 2'}  
                                numero={'2'} 
                                burgerName={'DOUBLE CHEESEBURGER'}
                                descricao='Dois suculentos hambúrgueres de carne grelhados, cobertos com uma fatia de queijo derretido, servidos em um pão macio com ingredientes tradicionais como alface, tomate, picles e condimentos como ketchup e mostarda'
                                valoritem={30.00} 
                                showAlert={true}
                                showAlert2={false}
                                
                            />
                           <Hamburguer 
                                mesa1={'MESA 2'}  
                                numero={'3'} 
                                burgerName='TRIPLE CHEESEBURGER'
                                descricao='Três suculentos hambúrgueres de carne grelhados, cobertos com uma fatia de queijo derretido, servidos em um pão macio com ingredientes tradicionais como alface, tomate, picles e condimentos como ketchup e mostarda'
                                valoritem={35.00}
                                showAlert={true}
                                showAlert2={false}
                            />
                            <Hamburguer 
                                mesa1={'MESA 2'}  
                                numero={'4'} 
                                burgerName='THE BIG MY BURGER'
                                descricao='Três suculentos hambúrgueres de carne grelhados, cobertos com uma fatia de queijo derretido, servidos em um pão macio com ingredientes tradicionais como alface, tomate, picles e condimentos como ketchup e mostarda'
                                valoritem={32.50}
                                showAlert={true}
                                showAlert2={false}
                            />
                            <Hamburguer
                                mesa1={'MESA 2'}  
                                numero={'5'} 
                                burgerName='FRIED CHICKENBURGER'
                                descricao='Peito de frango crocante e macio revestido em uma cobertura temperada, servido em um pão macio com ingredientes como alface, tomate, maionese ou molho picante'
                                valoritem={28.00}
                                showAlert={true}
                                showAlert2={false}
                            />
                            <Hamburguer
                                mesa1={'MESA 2'}  
                                numero={'6'} 
                                burgerName='FRIED VEGE BURGER'
                                descricao='Um hambúrguer à base de plantas feito, servido em um pão com ingredientes vegetarianos como alface, tomate, cebola e diversos molhos'
                                valoritem={25.00}
                                showAlert={true}
                                showAlert2={false}
                            />
                        </>
                    )}
                />
            </BurguersBox>
        </Container>
    )
}