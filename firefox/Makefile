OUT := asmr-one-back.xpi

FILES := manifest.json background.js

all: $(OUT)

$(OUT): $(FILES)
	zip -9 -u -q $@ $^

clean:
	rm -f $(OUT)

.PHONY: all clean
