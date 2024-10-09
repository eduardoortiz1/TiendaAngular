#!/bin/bash

# Rango de IPs
read -p "Introduce la IP base (ejemplo: 192.168.1.): " base_ip
read -p "Introduce el primer número del rango: " start
read -p "Introduce el último número del rango: " end
read -p "Introduce el nombre del archivo de salida (ejemplo: resultado.txt): " output_file

# Crear o vaciar el archivo de salida
> $output_file

# Recorrer el rango de IPs
for i in $(seq $start $end); do
    ip="$base_ip$i"
    echo "Haciendo ping a $ip..."
    ping -c 1 $ip > /dev/null 2>&1

    if [ $? -eq 0 ]; then
        echo "La IP $ip está activa" | tee -a $output_file
    else
        echo "La IP $ip no responde" | tee -a $output_file
    fi
done

echo "El resultado ha sido guardado en $output_file."
