package org.example;

import java.sql.SQLOutput;
import java.util.Scanner;

public class exercicios {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        notas(scan);
        senha(scan);
    }

    public static void notas(Scanner scan){

        int nota;
        System.out.println("Informe uma nota: ");
        nota = scan.nextInt();

        while(nota < 0 || nota >10){
            System.out.println("Nota inválida. \nDigite uma nova nota: " );
            nota = scan.nextInt();
        }

        System.out.println("Nota válida.\nA nota digitada foi: " + nota);

    }

    public static void senha(Scanner scan){

        System.out.println("Informe o seu nome: ");
        String nome = scan.next();

        System.out.println("Informe a sua senha: ");
        String senha = scan.next();

        while (nome.equalsIgnoreCase(senha)){
            System.out.println("A sua senha não pode ser igual o seu nome.\nInforme uma nova senha: ");
            senha = scan.next();
        }

        System.out.println("Senha válida!");
    }

    public static void validador(Scanner scan){

        System.out.println("Informe o seu nome: ");
        String nome = scan.next();
        while (nome.length() <= 3){
            System.out.println("Nome inválido! Seu nome deve ter mais de 3 letras.");
            System.out.println("Digite novamente: ");
            nome = scan.next();
        }
        System.out.println("Nome válido");

        System.out.println("Informe a sua idade: ");
        int idade = scan.nextInt();
        while (idade < 0 || idade > 150){
            System.out.println("Idade inválida\nInforme a sua idade: ");
            idade = scan.nextInt();
        }
        System.out.println("Idade válido");

        System.out.println("Informe o seu salário:");
        double salario = scan.nextDouble();
        while (salario <= 0){
            System.out.println("Salário Inválido\n Informe o seu salário");
            salario = scan.nextDouble();
        }
        System.out.println("Salário válido");


    }

}