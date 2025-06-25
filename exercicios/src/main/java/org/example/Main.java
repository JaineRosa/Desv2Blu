package org.example;

import java.security.PublicKey;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<>();
        numeros.add(2);
        numeros.add(9);
        numeros.add(5);
        numeros.add(7);
        numeros.add(12);

        int opcao;

        while (true){
            System.out.println("\n===== MENU =====");
            System.out.println("1 - Mostrar lista");
            System.out.println("2 - Buscar número por posição");
            System.out.println("3 - Alterar número");
            System.out.println("4 - Cadastrar novo número");
            System.out.println("5 - Remover número");
            System.out.println("6 - Buscar índice por número");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scan.nextInt();

            switch (opcao) {
                case 1:
                    mostrarLista(scan, numeros);
                    break;
                case 2:
                    buscarIndice(scan, numeros);
                    break;
                case 3:
                    alterarNumero(scan, numeros);
                    break;
                case 4:
                    cadastrarNumero(scan, numeros);
                    break;
                case 5:
                    removerNumero(scan, numeros);
                    break;
                case 6:
                    buscarPorNumero(scan, numeros);
                    break;
                case 0:
                    System.out.println("Encerrando o programa. Obrigado!");
                    scan.close();
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }

        }
    }

    public static void mostrarLista(Scanner scan, ArrayList<Integer> numeros) {
        System.out.println("\nLista atual de números:");
        for (int i = 0; i < numeros.size(); i++) {
            System.out.println("Posição " + i + ": " + numeros.get(i));
        }
    }

    public static void buscarIndice(Scanner scan, ArrayList<Integer> numeros) {

        System.out.print("Digite a posição do número que deseja ver: ");
        int posicao = scan.nextInt();

        if (posicao >= 0 && posicao < numeros.size()) {
            int valor = numeros.get(posicao);
            System.out.println("O número na posição " + posicao + " é: " + valor);
        } else {
            System.out.println("Posição inválida.");
        }
    }

    public static void alterarNumero(Scanner scan, ArrayList<Integer> numeros) {
        mostrarLista(scan, numeros);
        System.out.print("Digite a posição do número que deseja alterar: ");
        int posicao = scan.nextInt();

        if (posicao >= 0 && posicao < numeros.size()) {
            System.out.print("Digite o novo valor para a posição " + posicao + ": ");
            int novoValor = scan.nextInt();
            numeros.set(posicao, novoValor);
            System.out.println("Número atualizado com sucesso!");

            // Mostrar lista atualizada
            System.out.println("Lista atualizada:");
            for (int i = 0; i < numeros.size(); i++) {
                System.out.println("Posição " + i + ": " + numeros.get(i));
            }
        } else {
            System.out.println("Posição inválida.");
        }
    }

    public static void cadastrarNumero(Scanner scan, ArrayList<Integer> numeros) {
        try {
            System.out.println("Informe o novo número:");
            numeros.add(scan.nextInt());
        } catch (Exception e) {
            System.out.println("Número invalido");
        }
    }

    public static void removerNumero(Scanner scan, ArrayList<Integer> numeros) {
        mostrarLista(scan, numeros);
        System.out.println("Digite o índice do preço que deseja remover: ");
        int i = scan.nextInt();

        System.out.println("Tem certeza que deseja remover este numero: " + numeros.get(i) + "?");
        System.out.println("1-Sim  2-Não");
        int cancelar = scan.nextInt();
        if (cancelar == 1){
            System.out.println("Removido com sucesso");
            numeros.remove(i);
        } else{
            System.out.println("Voltando para o menu");
        }
    }

    public static void buscarPorNumero(Scanner scan, ArrayList<Integer> numeros){
        System.out.println("Informe o valor que deseja procurar");
        Integer num = scan.nextInt();

        for (int i = 0; i < numeros.size(); i++) {
            if (numeros.get(i).equals(num)){
                System.out.println("o índice do número "+ numeros.get(i)+ " é:" +i);
            } else {
                System.out.println("Número não encontrado");
            }
        }
    }
}
