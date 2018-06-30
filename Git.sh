#!/bin/sh
exec ssh -o StrictHostKeyChecking=no -i ~/../../AksRepo/AksRepo/keys/.ssh/id_rsa "$@"
