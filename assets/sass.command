#!/bin/sh

cd $(dirname $0)
#sass --watch -t nested sass:css
#sass --watch -t expented sass:css
sass --watch -t compact sass:css
#sass --watch -t compressed sass:css

#sassフォルダをコンパクトでWatch、cssフォルダにコンパイルする