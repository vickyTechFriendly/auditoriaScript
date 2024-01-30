#!/bin/bash

# Configuración de la conexión a la base de datos
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="thingsboard"
DB_USER="thingsboard"

# Archivo que almacena los registros de la ejecución del script
LOG_FILE="/home/vicky/mytbDocker/audit_log-cron.log"

# Borrar los registros anteriores a la hora actual en el uso horario 'Europe/Madrid'
QUERY="DELETE FROM audit_log WHERE timestamp 'epoch' + created_time * interval '1 millisecond' < CURRENT_TIMESTAMP AT TIME ZONE 'Europe/Madrid';"

# Ejecuta la consulta utilizando psql dentro del contenedor. 2>&1 indica que la salida de error estándar también se redirige al archivo de registro.
docker exec  mytbdocker-mytb-1 psql -h $DB_HOST -p $DB_PORT -d $DB_NAME -U $DB_USER -c "$QUERY" >> "$LOG_FILE" 2>&1