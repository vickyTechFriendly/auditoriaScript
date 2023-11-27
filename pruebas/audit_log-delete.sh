#!/bin/bash

# Configuración de la conexión a la base de datos
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="thingsboard"
DB_USER="thingsboard"

# Borrar los registros anteriores a la hora actual
QUERY="DELETE FROM audit_log WHERE timestamp 'epoch' + created_time * interval '1 millisecond' < CURRENT_TIMESTAMP AT TIME ZONE 'Europe/Madrid';"

# Ejecuta la consulta utilizando psql dentro del contenedor
docker exec -it mytbdocker-mytb-1 psql -h $DB_HOST -p $DB_PORT -d $DB_NAME -U $DB_USER -c "$QUERY"