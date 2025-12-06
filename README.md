# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
website
├─ eslint.config.js
├─ index.html
├─ llama.cpp
│  ├─ .clang-format
│  ├─ .clang-tidy
│  ├─ .devops
│  │  ├─ cann.Dockerfile
│  │  ├─ cpu.Dockerfile
│  │  ├─ cuda.Dockerfile
│  │  ├─ intel.Dockerfile
│  │  ├─ llama-cli-cann.Dockerfile
│  │  ├─ llama-cpp-cuda.srpm.spec
│  │  ├─ llama-cpp.srpm.spec
│  │  ├─ musa.Dockerfile
│  │  ├─ nix
│  │  │  ├─ apps.nix
│  │  │  ├─ devshells.nix
│  │  │  ├─ docker.nix
│  │  │  ├─ jetson-support.nix
│  │  │  ├─ nixpkgs-instances.nix
│  │  │  ├─ package-gguf-py.nix
│  │  │  ├─ package.nix
│  │  │  ├─ python-scripts.nix
│  │  │  ├─ scope.nix
│  │  │  └─ sif.nix
│  │  ├─ rocm.Dockerfile
│  │  ├─ s390x.Dockerfile
│  │  ├─ tools.sh
│  │  └─ vulkan.Dockerfile
│  ├─ .dockerignore
│  ├─ .ecrc
│  ├─ .editorconfig
│  ├─ .flake8
│  ├─ .pre-commit-config.yaml
│  ├─ AUTHORS
│  ├─ benches
│  │  └─ dgx-spark
│  │     ├─ aime25_openai__gpt-oss-120b-high_temp1.0_20251109_094547.html
│  │     ├─ aime25_openai__gpt-oss-120b-high_temp1.0_20251109_094547.json
│  │     ├─ aime25_openai__gpt-oss-120b-high_temp1.0_20251109_094547_allresults.json
│  │     └─ dgx-spark.md
│  ├─ build-xcframework.sh
│  ├─ ci
│  │  ├─ README-MUSA.md
│  │  ├─ README.md
│  │  └─ run.sh
│  ├─ cmake
│  │  ├─ arm64-apple-clang.cmake
│  │  ├─ arm64-windows-llvm.cmake
│  │  ├─ build-info.cmake
│  │  ├─ common.cmake
│  │  ├─ git-vars.cmake
│  │  ├─ llama-config.cmake.in
│  │  ├─ llama.pc.in
│  │  ├─ riscv64-spacemit-linux-gnu-gcc.cmake
│  │  └─ x64-windows-llvm.cmake
│  ├─ CMakeLists.txt
│  ├─ CMakePresets.json
│  ├─ CODEOWNERS
│  ├─ common
│  │  ├─ arg.cpp
│  │  ├─ arg.h
│  │  ├─ base64.hpp
│  │  ├─ build-info.cpp.in
│  │  ├─ chat-parser-xml-toolcall.cpp
│  │  ├─ chat-parser-xml-toolcall.h
│  │  ├─ chat-parser.cpp
│  │  ├─ chat-parser.h
│  │  ├─ chat.cpp
│  │  ├─ chat.h
│  │  ├─ CMakeLists.txt
│  │  ├─ common.cpp
│  │  ├─ common.h
│  │  ├─ console.cpp
│  │  ├─ console.h
│  │  ├─ download.cpp
│  │  ├─ download.h
│  │  ├─ http.h
│  │  ├─ json-partial.cpp
│  │  ├─ json-partial.h
│  │  ├─ json-schema-to-grammar.cpp
│  │  ├─ json-schema-to-grammar.h
│  │  ├─ llguidance.cpp
│  │  ├─ log.cpp
│  │  ├─ log.h
│  │  ├─ ngram-cache.cpp
│  │  ├─ ngram-cache.h
│  │  ├─ regex-partial.cpp
│  │  ├─ regex-partial.h
│  │  ├─ sampling.cpp
│  │  ├─ sampling.h
│  │  ├─ speculative.cpp
│  │  └─ speculative.h
│  ├─ CONTRIBUTING.md
│  ├─ convert_hf_to_gguf.py
│  ├─ convert_hf_to_gguf_update.py
│  ├─ convert_llama_ggml_to_gguf.py
│  ├─ convert_lora_to_gguf.py
│  ├─ docs
│  │  ├─ android.md
│  │  ├─ backend
│  │  │  ├─ BLIS.md
│  │  │  ├─ CANN.md
│  │  │  ├─ CUDA-FEDORA.md
│  │  │  ├─ hexagon
│  │  │  │  ├─ CMakeUserPresets.json
│  │  │  │  ├─ developer.md
│  │  │  │  └─ README.md
│  │  │  ├─ OPENCL.md
│  │  │  ├─ SYCL.md
│  │  │  └─ zDNN.md
│  │  ├─ build-riscv64-spacemit.md
│  │  ├─ build-s390x.md
│  │  ├─ build.md
│  │  ├─ development
│  │  │  ├─ debugging-tests.md
│  │  │  ├─ HOWTO-add-model.md
│  │  │  ├─ llama-star
│  │  │  │  ├─ idea-arch.key
│  │  │  │  └─ idea-arch.pdf
│  │  │  └─ token_generation_performance_tips.md
│  │  ├─ docker.md
│  │  ├─ function-calling.md
│  │  ├─ install.md
│  │  ├─ llguidance.md
│  │  ├─ multimodal
│  │  │  ├─ gemma3.md
│  │  │  ├─ glmedge.md
│  │  │  ├─ granitevision.md
│  │  │  ├─ llava.md
│  │  │  ├─ minicpmo2.6.md
│  │  │  ├─ minicpmo4.0.md
│  │  │  ├─ minicpmv2.5.md
│  │  │  ├─ minicpmv2.6.md
│  │  │  ├─ minicpmv4.0.md
│  │  │  ├─ minicpmv4.5.md
│  │  │  └─ MobileVLM.md
│  │  ├─ multimodal.md
│  │  ├─ ops
│  │  │  ├─ BLAS.csv
│  │  │  ├─ CANN.csv
│  │  │  ├─ CPU.csv
│  │  │  ├─ CUDA.csv
│  │  │  ├─ Metal.csv
│  │  │  ├─ OpenCL.csv
│  │  │  ├─ SYCL.csv
│  │  │  ├─ Vulkan.csv
│  │  │  └─ zDNN.csv
│  │  └─ ops.md
│  ├─ examples
│  │  ├─ batched
│  │  │  ├─ batched.cpp
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ README.md
│  │  ├─ batched.swift
│  │  │  ├─ Makefile
│  │  │  ├─ Package.swift
│  │  │  ├─ README.md
│  │  │  └─ Sources
│  │  │     └─ main.swift
│  │  ├─ CMakeLists.txt
│  │  ├─ convert-llama2c-to-ggml
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ convert-llama2c-to-ggml.cpp
│  │  │  └─ README.md
│  │  ├─ convert_legacy_llama.py
│  │  ├─ deprecation-warning
│  │  │  ├─ deprecation-warning.cpp
│  │  │  └─ README.md
│  │  ├─ diffusion
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ diffusion-cli.cpp
│  │  │  └─ README.md
│  │  ├─ embedding
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ embedding.cpp
│  │  │  └─ README.md
│  │  ├─ eval-callback
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ eval-callback.cpp
│  │  │  └─ README.md
│  │  ├─ gen-docs
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ gen-docs.cpp
│  │  ├─ gguf
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ gguf.cpp
│  │  ├─ gguf-hash
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ deps
│  │  │  │  ├─ rotate-bits
│  │  │  │  │  ├─ package.json
│  │  │  │  │  └─ rotate-bits.h
│  │  │  │  ├─ sha1
│  │  │  │  │  ├─ package.json
│  │  │  │  │  ├─ sha1.c
│  │  │  │  │  └─ sha1.h
│  │  │  │  ├─ sha256
│  │  │  │  │  ├─ package.json
│  │  │  │  │  ├─ sha256.c
│  │  │  │  │  └─ sha256.h
│  │  │  │  └─ xxhash
│  │  │  │     ├─ clib.json
│  │  │  │     ├─ xxhash.c
│  │  │  │     └─ xxhash.h
│  │  │  ├─ gguf-hash.cpp
│  │  │  └─ README.md
│  │  ├─ json_schema_pydantic_example.py
│  │  ├─ json_schema_to_grammar.py
│  │  ├─ llama.android
│  │  │  ├─ app
│  │  │  │  ├─ build.gradle.kts
│  │  │  │  ├─ proguard-rules.pro
│  │  │  │  └─ src
│  │  │  │     └─ main
│  │  │  │        ├─ AndroidManifest.xml
│  │  │  │        ├─ java
│  │  │  │        │  └─ com
│  │  │  │        │     └─ example
│  │  │  │        │        └─ llama
│  │  │  │        │           ├─ Downloadable.kt
│  │  │  │        │           ├─ MainActivity.kt
│  │  │  │        │           ├─ MainViewModel.kt
│  │  │  │        │           └─ ui
│  │  │  │        │              └─ theme
│  │  │  │        │                 ├─ Color.kt
│  │  │  │        │                 ├─ Theme.kt
│  │  │  │        │                 └─ Type.kt
│  │  │  │        └─ res
│  │  │  │           ├─ drawable
│  │  │  │           │  ├─ ic_launcher_background.xml
│  │  │  │           │  └─ ic_launcher_foreground.xml
│  │  │  │           ├─ mipmap-anydpi
│  │  │  │           │  ├─ ic_launcher.xml
│  │  │  │           │  └─ ic_launcher_round.xml
│  │  │  │           ├─ mipmap-hdpi
│  │  │  │           │  ├─ ic_launcher.webp
│  │  │  │           │  └─ ic_launcher_round.webp
│  │  │  │           ├─ mipmap-mdpi
│  │  │  │           │  ├─ ic_launcher.webp
│  │  │  │           │  └─ ic_launcher_round.webp
│  │  │  │           ├─ mipmap-xhdpi
│  │  │  │           │  ├─ ic_launcher.webp
│  │  │  │           │  └─ ic_launcher_round.webp
│  │  │  │           ├─ mipmap-xxhdpi
│  │  │  │           │  ├─ ic_launcher.webp
│  │  │  │           │  └─ ic_launcher_round.webp
│  │  │  │           ├─ mipmap-xxxhdpi
│  │  │  │           │  ├─ ic_launcher.webp
│  │  │  │           │  └─ ic_launcher_round.webp
│  │  │  │           ├─ values
│  │  │  │           │  ├─ colors.xml
│  │  │  │           │  ├─ strings.xml
│  │  │  │           │  └─ themes.xml
│  │  │  │           └─ xml
│  │  │  │              ├─ backup_rules.xml
│  │  │  │              └─ data_extraction_rules.xml
│  │  │  ├─ build.gradle.kts
│  │  │  ├─ gradle
│  │  │  │  └─ wrapper
│  │  │  │     ├─ gradle-wrapper.jar
│  │  │  │     └─ gradle-wrapper.properties
│  │  │  ├─ gradle.properties
│  │  │  ├─ gradlew
│  │  │  ├─ llama
│  │  │  │  ├─ build.gradle.kts
│  │  │  │  ├─ consumer-rules.pro
│  │  │  │  ├─ proguard-rules.pro
│  │  │  │  └─ src
│  │  │  │     ├─ androidTest
│  │  │  │     │  └─ java
│  │  │  │     │     └─ android
│  │  │  │     │        └─ llama
│  │  │  │     │           └─ cpp
│  │  │  │     │              └─ ExampleInstrumentedTest.kt
│  │  │  │     ├─ main
│  │  │  │     │  ├─ AndroidManifest.xml
│  │  │  │     │  ├─ cpp
│  │  │  │     │  │  ├─ CMakeLists.txt
│  │  │  │     │  │  └─ llama-android.cpp
│  │  │  │     │  └─ java
│  │  │  │     │     └─ android
│  │  │  │     │        └─ llama
│  │  │  │     │           └─ cpp
│  │  │  │     │              └─ LLamaAndroid.kt
│  │  │  │     └─ test
│  │  │  │        └─ java
│  │  │  │           └─ android
│  │  │  │              └─ llama
│  │  │  │                 └─ cpp
│  │  │  │                    └─ ExampleUnitTest.kt
│  │  │  ├─ README.md
│  │  │  └─ settings.gradle.kts
│  │  ├─ llama.swiftui
│  │  │  ├─ llama.cpp.swift
│  │  │  │  └─ LibLlama.swift
│  │  │  ├─ llama.swiftui
│  │  │  │  ├─ Assets.xcassets
│  │  │  │  │  ├─ AppIcon.appiconset
│  │  │  │  │  │  └─ Contents.json
│  │  │  │  │  └─ Contents.json
│  │  │  │  ├─ llama_swiftuiApp.swift
│  │  │  │  ├─ Models
│  │  │  │  │  └─ LlamaState.swift
│  │  │  │  ├─ Resources
│  │  │  │  │  └─ models
│  │  │  │  └─ UI
│  │  │  │     ├─ ContentView.swift
│  │  │  │     ├─ DownloadButton.swift
│  │  │  │     ├─ InputButton.swift
│  │  │  │     └─ LoadCustomButton.swift
│  │  │  ├─ llama.swiftui.xcodeproj
│  │  │  │  ├─ project.pbxproj
│  │  │  │  └─ project.xcworkspace
│  │  │  │     ├─ contents.xcworkspacedata
│  │  │  │     └─ xcshareddata
│  │  │  │        └─ IDEWorkspaceChecks.plist
│  │  │  └─ README.md
│  │  ├─ llama.vim
│  │  ├─ lookahead
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ lookahead.cpp
│  │  │  └─ README.md
│  │  ├─ lookup
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ lookup-create.cpp
│  │  │  ├─ lookup-merge.cpp
│  │  │  ├─ lookup-stats.cpp
│  │  │  ├─ lookup.cpp
│  │  │  └─ README.md
│  │  ├─ model-conversion
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ logits.cpp
│  │  │  ├─ Makefile
│  │  │  ├─ README.md
│  │  │  ├─ requirements.txt
│  │  │  └─ scripts
│  │  │     ├─ causal
│  │  │     │  ├─ compare-embeddings-logits.sh
│  │  │     │  ├─ compare-logits.py
│  │  │     │  ├─ convert-model.sh
│  │  │     │  ├─ modelcard.template
│  │  │     │  ├─ run-casual-gen-embeddings-org.py
│  │  │     │  ├─ run-converted-model-embeddings-logits.sh
│  │  │     │  ├─ run-converted-model.sh
│  │  │     │  └─ run-org-model.py
│  │  │     ├─ embedding
│  │  │     │  ├─ compare-embeddings-logits.sh
│  │  │     │  ├─ convert-model.sh
│  │  │     │  ├─ modelcard.template
│  │  │     │  ├─ run-converted-model.sh
│  │  │     │  └─ run-original-model.py
│  │  │     └─ utils
│  │  │        ├─ check-nmse.py
│  │  │        ├─ create-collection-add-model.sh
│  │  │        ├─ curl-embedding-server.sh
│  │  │        ├─ hf-add-model-to-collection.py
│  │  │        ├─ hf-create-collection.py
│  │  │        ├─ hf-create-model.py
│  │  │        ├─ hf-upload-gguf-model.py
│  │  │        ├─ inspect-converted-model.sh
│  │  │        ├─ inspect-org-model.py
│  │  │        ├─ perplexity-gen.sh
│  │  │        ├─ perplexity-run-simple.sh
│  │  │        ├─ perplexity-run.sh
│  │  │        ├─ quantize.sh
│  │  │        ├─ run-embedding-server.sh
│  │  │        └─ semantic_check.py
│  │  ├─ parallel
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ parallel.cpp
│  │  │  └─ README.md
│  │  ├─ passkey
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ passkey.cpp
│  │  │  └─ README.md
│  │  ├─ pydantic_models_to_grammar.py
│  │  ├─ pydantic_models_to_grammar_examples.py
│  │  ├─ reason-act.sh
│  │  ├─ regex_to_grammar.py
│  │  ├─ retrieval
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ README.md
│  │  │  └─ retrieval.cpp
│  │  ├─ save-load-state
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ save-load-state.cpp
│  │  ├─ server-llama2-13B.sh
│  │  ├─ server_embd.py
│  │  ├─ simple
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ README.md
│  │  │  └─ simple.cpp
│  │  ├─ simple-chat
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ README.md
│  │  │  └─ simple-chat.cpp
│  │  ├─ simple-cmake-pkg
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ README.md
│  │  ├─ speculative
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ README.md
│  │  │  └─ speculative.cpp
│  │  ├─ speculative-simple
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ README.md
│  │  │  └─ speculative-simple.cpp
│  │  ├─ sycl
│  │  │  ├─ build.sh
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ ls-sycl-device.cpp
│  │  │  ├─ README.md
│  │  │  ├─ run-llama2.sh
│  │  │  ├─ run-llama3.sh
│  │  │  ├─ win-build-sycl.bat
│  │  │  ├─ win-run-llama2.bat
│  │  │  └─ win-run-llama3.bat
│  │  ├─ training
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ finetune.cpp
│  │  │  └─ README.md
│  │  └─ ts-type-to-grammar.sh
│  ├─ flake.lock
│  ├─ flake.nix
│  ├─ ggml
│  │  ├─ cmake
│  │  │  ├─ common.cmake
│  │  │  ├─ ggml-config.cmake.in
│  │  │  └─ GitVars.cmake
│  │  ├─ CMakeLists.txt
│  │  ├─ include
│  │  │  ├─ ggml-alloc.h
│  │  │  ├─ ggml-backend.h
│  │  │  ├─ ggml-blas.h
│  │  │  ├─ ggml-cann.h
│  │  │  ├─ ggml-cpp.h
│  │  │  ├─ ggml-cpu.h
│  │  │  ├─ ggml-cuda.h
│  │  │  ├─ ggml-hexagon.h
│  │  │  ├─ ggml-metal.h
│  │  │  ├─ ggml-opencl.h
│  │  │  ├─ ggml-opt.h
│  │  │  ├─ ggml-rpc.h
│  │  │  ├─ ggml-sycl.h
│  │  │  ├─ ggml-vulkan.h
│  │  │  ├─ ggml-webgpu.h
│  │  │  ├─ ggml-zdnn.h
│  │  │  ├─ ggml.h
│  │  │  └─ gguf.h
│  │  └─ src
│  │     ├─ CMakeLists.txt
│  │     ├─ ggml-alloc.c
│  │     ├─ ggml-backend-impl.h
│  │     ├─ ggml-backend-reg.cpp
│  │     ├─ ggml-backend.cpp
│  │     ├─ ggml-blas
│  │     │  ├─ CMakeLists.txt
│  │     │  └─ ggml-blas.cpp
│  │     ├─ ggml-cann
│  │     │  ├─ aclnn_ops.cpp
│  │     │  ├─ aclnn_ops.h
│  │     │  ├─ acl_tensor.cpp
│  │     │  ├─ acl_tensor.h
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ common.h
│  │     │  └─ ggml-cann.cpp
│  │     ├─ ggml-common.h
│  │     ├─ ggml-cpu
│  │     │  ├─ amx
│  │     │  │  ├─ amx.cpp
│  │     │  │  ├─ amx.h
│  │     │  │  ├─ common.h
│  │     │  │  ├─ mmq.cpp
│  │     │  │  └─ mmq.h
│  │     │  ├─ arch
│  │     │  │  ├─ arm
│  │     │  │  │  ├─ cpu-feats.cpp
│  │     │  │  │  ├─ quants.c
│  │     │  │  │  └─ repack.cpp
│  │     │  │  ├─ loongarch
│  │     │  │  │  └─ quants.c
│  │     │  │  ├─ powerpc
│  │     │  │  │  ├─ cpu-feats.cpp
│  │     │  │  │  └─ quants.c
│  │     │  │  ├─ riscv
│  │     │  │  │  ├─ cpu-feats.cpp
│  │     │  │  │  ├─ quants.c
│  │     │  │  │  └─ repack.cpp
│  │     │  │  ├─ s390
│  │     │  │  │  ├─ cpu-feats.cpp
│  │     │  │  │  └─ quants.c
│  │     │  │  ├─ wasm
│  │     │  │  │  └─ quants.c
│  │     │  │  └─ x86
│  │     │  │     ├─ cpu-feats.cpp
│  │     │  │     ├─ quants.c
│  │     │  │     └─ repack.cpp
│  │     │  ├─ arch-fallback.h
│  │     │  ├─ binary-ops.cpp
│  │     │  ├─ binary-ops.h
│  │     │  ├─ cmake
│  │     │  │  └─ FindSIMD.cmake
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ common.h
│  │     │  ├─ ggml-cpu-impl.h
│  │     │  ├─ ggml-cpu.c
│  │     │  ├─ ggml-cpu.cpp
│  │     │  ├─ hbm.cpp
│  │     │  ├─ hbm.h
│  │     │  ├─ kleidiai
│  │     │  │  ├─ kernels.cpp
│  │     │  │  ├─ kernels.h
│  │     │  │  ├─ kleidiai.cpp
│  │     │  │  └─ kleidiai.h
│  │     │  ├─ llamafile
│  │     │  │  ├─ sgemm.cpp
│  │     │  │  └─ sgemm.h
│  │     │  ├─ ops.cpp
│  │     │  ├─ ops.h
│  │     │  ├─ quants.c
│  │     │  ├─ quants.h
│  │     │  ├─ repack.cpp
│  │     │  ├─ repack.h
│  │     │  ├─ simd-mappings.h
│  │     │  ├─ spacemit
│  │     │  │  ├─ ime.cpp
│  │     │  │  ├─ ime.h
│  │     │  │  ├─ ime1_kernels.cpp
│  │     │  │  └─ ime_kernels.h
│  │     │  ├─ traits.cpp
│  │     │  ├─ traits.h
│  │     │  ├─ unary-ops.cpp
│  │     │  ├─ unary-ops.h
│  │     │  ├─ vec.cpp
│  │     │  └─ vec.h
│  │     ├─ ggml-cuda
│  │     │  ├─ acc.cu
│  │     │  ├─ acc.cuh
│  │     │  ├─ add-id.cu
│  │     │  ├─ add-id.cuh
│  │     │  ├─ arange.cu
│  │     │  ├─ arange.cuh
│  │     │  ├─ argmax.cu
│  │     │  ├─ argmax.cuh
│  │     │  ├─ argsort.cu
│  │     │  ├─ argsort.cuh
│  │     │  ├─ binbcast.cu
│  │     │  ├─ binbcast.cuh
│  │     │  ├─ clamp.cu
│  │     │  ├─ clamp.cuh
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ common.cuh
│  │     │  ├─ concat.cu
│  │     │  ├─ concat.cuh
│  │     │  ├─ conv-transpose-1d.cu
│  │     │  ├─ conv-transpose-1d.cuh
│  │     │  ├─ conv2d-dw.cu
│  │     │  ├─ conv2d-dw.cuh
│  │     │  ├─ conv2d-transpose.cu
│  │     │  ├─ conv2d-transpose.cuh
│  │     │  ├─ conv2d.cu
│  │     │  ├─ conv2d.cuh
│  │     │  ├─ convert.cu
│  │     │  ├─ convert.cuh
│  │     │  ├─ count-equal.cu
│  │     │  ├─ count-equal.cuh
│  │     │  ├─ cp-async.cuh
│  │     │  ├─ cpy-utils.cuh
│  │     │  ├─ cpy.cu
│  │     │  ├─ cpy.cuh
│  │     │  ├─ cross-entropy-loss.cu
│  │     │  ├─ cross-entropy-loss.cuh
│  │     │  ├─ dequantize.cuh
│  │     │  ├─ diagmask.cu
│  │     │  ├─ diagmask.cuh
│  │     │  ├─ fattn-common.cuh
│  │     │  ├─ fattn-mma-f16.cuh
│  │     │  ├─ fattn-tile.cu
│  │     │  ├─ fattn-tile.cuh
│  │     │  ├─ fattn-vec.cuh
│  │     │  ├─ fattn-wmma-f16.cu
│  │     │  ├─ fattn-wmma-f16.cuh
│  │     │  ├─ fattn.cu
│  │     │  ├─ fattn.cuh
│  │     │  ├─ getrows.cu
│  │     │  ├─ getrows.cuh
│  │     │  ├─ ggml-cuda.cu
│  │     │  ├─ gla.cu
│  │     │  ├─ gla.cuh
│  │     │  ├─ im2col.cu
│  │     │  ├─ im2col.cuh
│  │     │  ├─ mean.cu
│  │     │  ├─ mean.cuh
│  │     │  ├─ mma.cuh
│  │     │  ├─ mmf.cu
│  │     │  ├─ mmf.cuh
│  │     │  ├─ mmid.cu
│  │     │  ├─ mmid.cuh
│  │     │  ├─ mmq.cu
│  │     │  ├─ mmq.cuh
│  │     │  ├─ mmvf.cu
│  │     │  ├─ mmvf.cuh
│  │     │  ├─ mmvq.cu
│  │     │  ├─ mmvq.cuh
│  │     │  ├─ norm.cu
│  │     │  ├─ norm.cuh
│  │     │  ├─ opt-step-adamw.cu
│  │     │  ├─ opt-step-adamw.cuh
│  │     │  ├─ opt-step-sgd.cu
│  │     │  ├─ opt-step-sgd.cuh
│  │     │  ├─ out-prod.cu
│  │     │  ├─ out-prod.cuh
│  │     │  ├─ pad.cu
│  │     │  ├─ pad.cuh
│  │     │  ├─ pad_reflect_1d.cu
│  │     │  ├─ pad_reflect_1d.cuh
│  │     │  ├─ pool2d.cu
│  │     │  ├─ pool2d.cuh
│  │     │  ├─ quantize.cu
│  │     │  ├─ quantize.cuh
│  │     │  ├─ reduce_rows.cuh
│  │     │  ├─ roll.cu
│  │     │  ├─ roll.cuh
│  │     │  ├─ rope.cu
│  │     │  ├─ rope.cuh
│  │     │  ├─ scale.cu
│  │     │  ├─ scale.cuh
│  │     │  ├─ set-rows.cu
│  │     │  ├─ set-rows.cuh
│  │     │  ├─ set.cu
│  │     │  ├─ set.cuh
│  │     │  ├─ softcap.cu
│  │     │  ├─ softcap.cuh
│  │     │  ├─ softmax.cu
│  │     │  ├─ softmax.cuh
│  │     │  ├─ solve_tri.cu
│  │     │  ├─ solve_tri.cuh
│  │     │  ├─ ssm-conv.cu
│  │     │  ├─ ssm-conv.cuh
│  │     │  ├─ ssm-scan.cu
│  │     │  ├─ ssm-scan.cuh
│  │     │  ├─ sum.cu
│  │     │  ├─ sum.cuh
│  │     │  ├─ sumrows.cu
│  │     │  ├─ sumrows.cuh
│  │     │  ├─ template-instances
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_1-ncols2_16.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_1-ncols2_8.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_16-ncols2_1.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_16-ncols2_2.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_16-ncols2_4.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_2-ncols2_16.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_2-ncols2_4.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_2-ncols2_8.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_32-ncols2_1.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_32-ncols2_2.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_4-ncols2_16.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_4-ncols2_2.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_4-ncols2_4.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_4-ncols2_8.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_64-ncols2_1.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_8-ncols2_1.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_8-ncols2_2.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_8-ncols2_4.cu
│  │     │  │  ├─ fattn-mma-f16-instance-ncols1_8-ncols2_8.cu
│  │     │  │  ├─ fattn-tile-instance-dkq112-dv112.cu
│  │     │  │  ├─ fattn-tile-instance-dkq128-dv128.cu
│  │     │  │  ├─ fattn-tile-instance-dkq256-dv256.cu
│  │     │  │  ├─ fattn-tile-instance-dkq40-dv40.cu
│  │     │  │  ├─ fattn-tile-instance-dkq576-dv512.cu
│  │     │  │  ├─ fattn-tile-instance-dkq64-dv64.cu
│  │     │  │  ├─ fattn-tile-instance-dkq72-dv72.cu
│  │     │  │  ├─ fattn-tile-instance-dkq80-dv80.cu
│  │     │  │  ├─ fattn-tile-instance-dkq96-dv96.cu
│  │     │  │  ├─ fattn-vec-instance-f16-f16.cu
│  │     │  │  ├─ fattn-vec-instance-f16-q4_0.cu
│  │     │  │  ├─ fattn-vec-instance-f16-q4_1.cu
│  │     │  │  ├─ fattn-vec-instance-f16-q5_0.cu
│  │     │  │  ├─ fattn-vec-instance-f16-q5_1.cu
│  │     │  │  ├─ fattn-vec-instance-f16-q8_0.cu
│  │     │  │  ├─ fattn-vec-instance-q4_0-f16.cu
│  │     │  │  ├─ fattn-vec-instance-q4_0-q4_0.cu
│  │     │  │  ├─ fattn-vec-instance-q4_0-q4_1.cu
│  │     │  │  ├─ fattn-vec-instance-q4_0-q5_0.cu
│  │     │  │  ├─ fattn-vec-instance-q4_0-q5_1.cu
│  │     │  │  ├─ fattn-vec-instance-q4_0-q8_0.cu
│  │     │  │  ├─ fattn-vec-instance-q4_1-f16.cu
│  │     │  │  ├─ fattn-vec-instance-q4_1-q4_0.cu
│  │     │  │  ├─ fattn-vec-instance-q4_1-q4_1.cu
│  │     │  │  ├─ fattn-vec-instance-q4_1-q5_0.cu
│  │     │  │  ├─ fattn-vec-instance-q4_1-q5_1.cu
│  │     │  │  ├─ fattn-vec-instance-q4_1-q8_0.cu
│  │     │  │  ├─ fattn-vec-instance-q5_0-f16.cu
│  │     │  │  ├─ fattn-vec-instance-q5_0-q4_0.cu
│  │     │  │  ├─ fattn-vec-instance-q5_0-q4_1.cu
│  │     │  │  ├─ fattn-vec-instance-q5_0-q5_0.cu
│  │     │  │  ├─ fattn-vec-instance-q5_0-q5_1.cu
│  │     │  │  ├─ fattn-vec-instance-q5_0-q8_0.cu
│  │     │  │  ├─ fattn-vec-instance-q5_1-f16.cu
│  │     │  │  ├─ fattn-vec-instance-q5_1-q4_0.cu
│  │     │  │  ├─ fattn-vec-instance-q5_1-q4_1.cu
│  │     │  │  ├─ fattn-vec-instance-q5_1-q5_0.cu
│  │     │  │  ├─ fattn-vec-instance-q5_1-q5_1.cu
│  │     │  │  ├─ fattn-vec-instance-q5_1-q8_0.cu
│  │     │  │  ├─ fattn-vec-instance-q8_0-f16.cu
│  │     │  │  ├─ fattn-vec-instance-q8_0-q4_0.cu
│  │     │  │  ├─ fattn-vec-instance-q8_0-q4_1.cu
│  │     │  │  ├─ fattn-vec-instance-q8_0-q5_0.cu
│  │     │  │  ├─ fattn-vec-instance-q8_0-q5_1.cu
│  │     │  │  ├─ fattn-vec-instance-q8_0-q8_0.cu
│  │     │  │  ├─ generate_cu_files.py
│  │     │  │  ├─ mmf-instance-ncols_1.cu
│  │     │  │  ├─ mmf-instance-ncols_10.cu
│  │     │  │  ├─ mmf-instance-ncols_11.cu
│  │     │  │  ├─ mmf-instance-ncols_12.cu
│  │     │  │  ├─ mmf-instance-ncols_13.cu
│  │     │  │  ├─ mmf-instance-ncols_14.cu
│  │     │  │  ├─ mmf-instance-ncols_15.cu
│  │     │  │  ├─ mmf-instance-ncols_16.cu
│  │     │  │  ├─ mmf-instance-ncols_2.cu
│  │     │  │  ├─ mmf-instance-ncols_3.cu
│  │     │  │  ├─ mmf-instance-ncols_4.cu
│  │     │  │  ├─ mmf-instance-ncols_5.cu
│  │     │  │  ├─ mmf-instance-ncols_6.cu
│  │     │  │  ├─ mmf-instance-ncols_7.cu
│  │     │  │  ├─ mmf-instance-ncols_8.cu
│  │     │  │  ├─ mmf-instance-ncols_9.cu
│  │     │  │  ├─ mmq-instance-iq1_s.cu
│  │     │  │  ├─ mmq-instance-iq2_s.cu
│  │     │  │  ├─ mmq-instance-iq2_xs.cu
│  │     │  │  ├─ mmq-instance-iq2_xxs.cu
│  │     │  │  ├─ mmq-instance-iq3_s.cu
│  │     │  │  ├─ mmq-instance-iq3_xxs.cu
│  │     │  │  ├─ mmq-instance-iq4_nl.cu
│  │     │  │  ├─ mmq-instance-iq4_xs.cu
│  │     │  │  ├─ mmq-instance-mxfp4.cu
│  │     │  │  ├─ mmq-instance-q2_k.cu
│  │     │  │  ├─ mmq-instance-q3_k.cu
│  │     │  │  ├─ mmq-instance-q4_0.cu
│  │     │  │  ├─ mmq-instance-q4_1.cu
│  │     │  │  ├─ mmq-instance-q4_k.cu
│  │     │  │  ├─ mmq-instance-q5_0.cu
│  │     │  │  ├─ mmq-instance-q5_1.cu
│  │     │  │  ├─ mmq-instance-q5_k.cu
│  │     │  │  ├─ mmq-instance-q6_k.cu
│  │     │  │  └─ mmq-instance-q8_0.cu
│  │     │  ├─ topk-moe.cu
│  │     │  ├─ topk-moe.cuh
│  │     │  ├─ tsembd.cu
│  │     │  ├─ tsembd.cuh
│  │     │  ├─ unary.cu
│  │     │  ├─ unary.cuh
│  │     │  ├─ upscale.cu
│  │     │  ├─ upscale.cuh
│  │     │  ├─ vecdotq.cuh
│  │     │  ├─ vendors
│  │     │  │  ├─ cuda.h
│  │     │  │  ├─ hip.h
│  │     │  │  └─ musa.h
│  │     │  ├─ wkv.cu
│  │     │  └─ wkv.cuh
│  │     ├─ ggml-hexagon
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ ggml-hexagon.cpp
│  │     │  ├─ htp
│  │     │  │  ├─ act-ops.c
│  │     │  │  ├─ binary-ops.c
│  │     │  │  ├─ cmake-toolchain.cmake
│  │     │  │  ├─ CMakeLists.txt
│  │     │  │  ├─ htp-ctx.h
│  │     │  │  ├─ htp-dma.c
│  │     │  │  ├─ htp-dma.h
│  │     │  │  ├─ htp-msg.h
│  │     │  │  ├─ htp-ops.h
│  │     │  │  ├─ htp_iface.idl
│  │     │  │  ├─ hvx-exp.c
│  │     │  │  ├─ hvx-inverse.c
│  │     │  │  ├─ hvx-sigmoid.c
│  │     │  │  ├─ hvx-utils.c
│  │     │  │  ├─ hvx-utils.h
│  │     │  │  ├─ main.c
│  │     │  │  ├─ matmul-ops.c
│  │     │  │  ├─ ops-utils.h
│  │     │  │  ├─ rope-ops.c
│  │     │  │  ├─ softmax-ops.c
│  │     │  │  ├─ unary-ops.c
│  │     │  │  ├─ worker-pool.c
│  │     │  │  └─ worker-pool.h
│  │     │  ├─ htp-utils.c
│  │     │  └─ htp-utils.h
│  │     ├─ ggml-hip
│  │     │  └─ CMakeLists.txt
│  │     ├─ ggml-impl.h
│  │     ├─ ggml-metal
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ ggml-metal-common.cpp
│  │     │  ├─ ggml-metal-common.h
│  │     │  ├─ ggml-metal-context.h
│  │     │  ├─ ggml-metal-context.m
│  │     │  ├─ ggml-metal-device.cpp
│  │     │  ├─ ggml-metal-device.h
│  │     │  ├─ ggml-metal-device.m
│  │     │  ├─ ggml-metal-impl.h
│  │     │  ├─ ggml-metal-ops.cpp
│  │     │  ├─ ggml-metal-ops.h
│  │     │  ├─ ggml-metal.cpp
│  │     │  └─ ggml-metal.metal
│  │     ├─ ggml-musa
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ mudnn.cu
│  │     │  └─ mudnn.cuh
│  │     ├─ ggml-opencl
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ ggml-opencl.cpp
│  │     │  └─ kernels
│  │     │     ├─ add.cl
│  │     │     ├─ add_id.cl
│  │     │     ├─ argsort.cl
│  │     │     ├─ clamp.cl
│  │     │     ├─ concat.cl
│  │     │     ├─ conv2d.cl
│  │     │     ├─ conv2d_f16_f32.cl
│  │     │     ├─ cpy.cl
│  │     │     ├─ cvt.cl
│  │     │     ├─ diag_mask_inf.cl
│  │     │     ├─ div.cl
│  │     │     ├─ embed_kernel.py
│  │     │     ├─ flash_attn_f16.cl
│  │     │     ├─ flash_attn_f32.cl
│  │     │     ├─ flash_attn_f32_f16.cl
│  │     │     ├─ gelu.cl
│  │     │     ├─ gemm_moe_mxfp4_f32.cl
│  │     │     ├─ gemv_moe_mxfp4_f32.cl
│  │     │     ├─ gemv_noshuffle.cl
│  │     │     ├─ gemv_noshuffle_general.cl
│  │     │     ├─ get_rows.cl
│  │     │     ├─ glu.cl
│  │     │     ├─ group_norm.cl
│  │     │     ├─ im2col_f16.cl
│  │     │     ├─ im2col_f32.cl
│  │     │     ├─ mean.cl
│  │     │     ├─ mul.cl
│  │     │     ├─ mul_mat_Ab_Bi_8x4.cl
│  │     │     ├─ mul_mat_f16_f32.cl
│  │     │     ├─ mul_mm_f16_f32_kq_kqv.cl
│  │     │     ├─ mul_mm_f16_f32_l4_lm.cl
│  │     │     ├─ mul_mm_f32_f32_l4_lm.cl
│  │     │     ├─ mul_mm_q8_0_f32_l4_lm.cl
│  │     │     ├─ mul_mv_f16_f16.cl
│  │     │     ├─ mul_mv_f16_f32.cl
│  │     │     ├─ mul_mv_f16_f32_1row.cl
│  │     │     ├─ mul_mv_f16_f32_l4.cl
│  │     │     ├─ mul_mv_f32_f32.cl
│  │     │     ├─ mul_mv_id_mxfp4_f32.cl
│  │     │     ├─ mul_mv_id_mxfp4_f32_flat.cl
│  │     │     ├─ mul_mv_id_q4_0_f32_8x_flat.cl
│  │     │     ├─ mul_mv_id_q8_0_f32.cl
│  │     │     ├─ mul_mv_id_q8_0_f32_flat.cl
│  │     │     ├─ mul_mv_mxfp4_f32.cl
│  │     │     ├─ mul_mv_mxfp4_f32_flat.cl
│  │     │     ├─ mul_mv_q4_0_f32.cl
│  │     │     ├─ mul_mv_q4_0_f32_1d_16x_flat.cl
│  │     │     ├─ mul_mv_q4_0_f32_1d_8x_flat.cl
│  │     │     ├─ mul_mv_q4_0_f32_8x_flat.cl
│  │     │     ├─ mul_mv_q4_0_f32_v.cl
│  │     │     ├─ mul_mv_q6_k.cl
│  │     │     ├─ mul_mv_q8_0_f32.cl
│  │     │     ├─ mul_mv_q8_0_f32_flat.cl
│  │     │     ├─ norm.cl
│  │     │     ├─ pad.cl
│  │     │     ├─ relu.cl
│  │     │     ├─ repeat.cl
│  │     │     ├─ rms_norm.cl
│  │     │     ├─ rope.cl
│  │     │     ├─ scale.cl
│  │     │     ├─ set_rows.cl
│  │     │     ├─ sigmoid.cl
│  │     │     ├─ silu.cl
│  │     │     ├─ softmax_4_f16.cl
│  │     │     ├─ softmax_4_f32.cl
│  │     │     ├─ softmax_f16.cl
│  │     │     ├─ softmax_f32.cl
│  │     │     ├─ sqr.cl
│  │     │     ├─ sqrt.cl
│  │     │     ├─ ssm_conv.cl
│  │     │     ├─ sub.cl
│  │     │     ├─ sum_rows.cl
│  │     │     ├─ tanh.cl
│  │     │     ├─ transpose.cl
│  │     │     ├─ tsembd.cl
│  │     │     └─ upscale.cl
│  │     ├─ ggml-opt.cpp
│  │     ├─ ggml-quants.c
│  │     ├─ ggml-quants.h
│  │     ├─ ggml-rpc
│  │     │  ├─ CMakeLists.txt
│  │     │  └─ ggml-rpc.cpp
│  │     ├─ ggml-sycl
│  │     │  ├─ backend.hpp
│  │     │  ├─ binbcast.cpp
│  │     │  ├─ binbcast.hpp
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ common.cpp
│  │     │  ├─ common.hpp
│  │     │  ├─ concat.cpp
│  │     │  ├─ concat.hpp
│  │     │  ├─ conv.cpp
│  │     │  ├─ conv.hpp
│  │     │  ├─ convert.cpp
│  │     │  ├─ convert.hpp
│  │     │  ├─ count-equal.cpp
│  │     │  ├─ count-equal.hpp
│  │     │  ├─ cpy.cpp
│  │     │  ├─ cpy.hpp
│  │     │  ├─ dequantize.hpp
│  │     │  ├─ dmmv.cpp
│  │     │  ├─ dmmv.hpp
│  │     │  ├─ dpct
│  │     │  │  └─ helper.hpp
│  │     │  ├─ element_wise.cpp
│  │     │  ├─ element_wise.hpp
│  │     │  ├─ gemm.hpp
│  │     │  ├─ getrows.cpp
│  │     │  ├─ getrows.hpp
│  │     │  ├─ ggml-sycl.cpp
│  │     │  ├─ gla.cpp
│  │     │  ├─ gla.hpp
│  │     │  ├─ im2col.cpp
│  │     │  ├─ im2col.hpp
│  │     │  ├─ mmq.cpp
│  │     │  ├─ mmq.hpp
│  │     │  ├─ mmvq.cpp
│  │     │  ├─ mmvq.hpp
│  │     │  ├─ norm.cpp
│  │     │  ├─ norm.hpp
│  │     │  ├─ outprod.cpp
│  │     │  ├─ outprod.hpp
│  │     │  ├─ pad.cpp
│  │     │  ├─ pad.hpp
│  │     │  ├─ pad_reflect_1d.cpp
│  │     │  ├─ pad_reflect_1d.hpp
│  │     │  ├─ presets.hpp
│  │     │  ├─ quantize.hpp
│  │     │  ├─ quants.hpp
│  │     │  ├─ repeat_back.cpp
│  │     │  ├─ repeat_back.hpp
│  │     │  ├─ roll.cpp
│  │     │  ├─ roll.hpp
│  │     │  ├─ rope.cpp
│  │     │  ├─ rope.hpp
│  │     │  ├─ set.cpp
│  │     │  ├─ set.hpp
│  │     │  ├─ set_rows.cpp
│  │     │  ├─ set_rows.hpp
│  │     │  ├─ softmax.cpp
│  │     │  ├─ softmax.hpp
│  │     │  ├─ ssm_conv.cpp
│  │     │  ├─ ssm_conv.hpp
│  │     │  ├─ sycl_hw.cpp
│  │     │  ├─ sycl_hw.hpp
│  │     │  ├─ tsembd.cpp
│  │     │  ├─ tsembd.hpp
│  │     │  ├─ vecdotq.hpp
│  │     │  ├─ wkv.cpp
│  │     │  └─ wkv.hpp
│  │     ├─ ggml-threading.cpp
│  │     ├─ ggml-threading.h
│  │     ├─ ggml-vulkan
│  │     │  ├─ cmake
│  │     │  │  └─ host-toolchain.cmake.in
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ ggml-vulkan.cpp
│  │     │  └─ vulkan-shaders
│  │     │     ├─ abs.comp
│  │     │     ├─ acc.comp
│  │     │     ├─ add.comp
│  │     │     ├─ add1.comp
│  │     │     ├─ add_id.comp
│  │     │     ├─ arange.comp
│  │     │     ├─ argmax.comp
│  │     │     ├─ argsort.comp
│  │     │     ├─ argsort_large.comp
│  │     │     ├─ ceil.comp
│  │     │     ├─ clamp.comp
│  │     │     ├─ CMakeLists.txt
│  │     │     ├─ concat.comp
│  │     │     ├─ contig_copy.comp
│  │     │     ├─ conv2d_dw.comp
│  │     │     ├─ conv2d_mm.comp
│  │     │     ├─ conv_transpose_1d.comp
│  │     │     ├─ copy.comp
│  │     │     ├─ copy_from_quant.comp
│  │     │     ├─ copy_to_quant.comp
│  │     │     ├─ copy_transpose.comp
│  │     │     ├─ cos.comp
│  │     │     ├─ count_equal.comp
│  │     │     ├─ cumsum.comp
│  │     │     ├─ dequant_f32.comp
│  │     │     ├─ dequant_funcs.glsl
│  │     │     ├─ dequant_funcs_cm2.glsl
│  │     │     ├─ dequant_head.glsl
│  │     │     ├─ dequant_iq1_m.comp
│  │     │     ├─ dequant_iq1_s.comp
│  │     │     ├─ dequant_iq2_s.comp
│  │     │     ├─ dequant_iq2_xs.comp
│  │     │     ├─ dequant_iq2_xxs.comp
│  │     │     ├─ dequant_iq3_s.comp
│  │     │     ├─ dequant_iq3_xxs.comp
│  │     │     ├─ dequant_iq4_nl.comp
│  │     │     ├─ dequant_iq4_xs.comp
│  │     │     ├─ dequant_mxfp4.comp
│  │     │     ├─ dequant_q2_k.comp
│  │     │     ├─ dequant_q3_k.comp
│  │     │     ├─ dequant_q4_0.comp
│  │     │     ├─ dequant_q4_1.comp
│  │     │     ├─ dequant_q4_k.comp
│  │     │     ├─ dequant_q5_0.comp
│  │     │     ├─ dequant_q5_1.comp
│  │     │     ├─ dequant_q5_k.comp
│  │     │     ├─ dequant_q6_k.comp
│  │     │     ├─ dequant_q8_0.comp
│  │     │     ├─ diag_mask_inf.comp
│  │     │     ├─ div.comp
│  │     │     ├─ exp.comp
│  │     │     ├─ feature-tests
│  │     │     │  ├─ bfloat16.comp
│  │     │     │  ├─ coopmat.comp
│  │     │     │  ├─ coopmat2.comp
│  │     │     │  └─ integer_dot.comp
│  │     │     ├─ fill.comp
│  │     │     ├─ flash_attn.comp
│  │     │     ├─ flash_attn_base.glsl
│  │     │     ├─ flash_attn_cm1.comp
│  │     │     ├─ flash_attn_cm2.comp
│  │     │     ├─ flash_attn_split_k_reduce.comp
│  │     │     ├─ floor.comp
│  │     │     ├─ geglu.comp
│  │     │     ├─ geglu_erf.comp
│  │     │     ├─ geglu_quick.comp
│  │     │     ├─ gelu.comp
│  │     │     ├─ gelu_erf.comp
│  │     │     ├─ gelu_quick.comp
│  │     │     ├─ generic_binary_head.glsl
│  │     │     ├─ generic_head.glsl
│  │     │     ├─ generic_unary_head.glsl
│  │     │     ├─ get_rows.comp
│  │     │     ├─ get_rows_quant.comp
│  │     │     ├─ glu_head.glsl
│  │     │     ├─ glu_main.glsl
│  │     │     ├─ group_norm.comp
│  │     │     ├─ hardsigmoid.comp
│  │     │     ├─ hardswish.comp
│  │     │     ├─ im2col.comp
│  │     │     ├─ im2col_3d.comp
│  │     │     ├─ l2_norm.comp
│  │     │     ├─ leaky_relu.comp
│  │     │     ├─ log.comp
│  │     │     ├─ mul.comp
│  │     │     ├─ multi_add.comp
│  │     │     ├─ mul_mat_split_k_reduce.comp
│  │     │     ├─ mul_mat_vec.comp
│  │     │     ├─ mul_mat_vecq.comp
│  │     │     ├─ mul_mat_vecq_funcs.glsl
│  │     │     ├─ mul_mat_vec_base.glsl
│  │     │     ├─ mul_mat_vec_iface.glsl
│  │     │     ├─ mul_mat_vec_iq1_m.comp
│  │     │     ├─ mul_mat_vec_iq1_s.comp
│  │     │     ├─ mul_mat_vec_iq2_s.comp
│  │     │     ├─ mul_mat_vec_iq2_xs.comp
│  │     │     ├─ mul_mat_vec_iq2_xxs.comp
│  │     │     ├─ mul_mat_vec_iq3_s.comp
│  │     │     ├─ mul_mat_vec_iq3_xxs.comp
│  │     │     ├─ mul_mat_vec_nc.comp
│  │     │     ├─ mul_mat_vec_p021.comp
│  │     │     ├─ mul_mat_vec_q2_k.comp
│  │     │     ├─ mul_mat_vec_q3_k.comp
│  │     │     ├─ mul_mat_vec_q4_k.comp
│  │     │     ├─ mul_mat_vec_q5_k.comp
│  │     │     ├─ mul_mat_vec_q6_k.comp
│  │     │     ├─ mul_mm.comp
│  │     │     ├─ mul_mmq.comp
│  │     │     ├─ mul_mmq_funcs.glsl
│  │     │     ├─ mul_mmq_shmem_types.glsl
│  │     │     ├─ mul_mm_cm2.comp
│  │     │     ├─ mul_mm_funcs.glsl
│  │     │     ├─ mul_mm_id_funcs.glsl
│  │     │     ├─ neg.comp
│  │     │     ├─ norm.comp
│  │     │     ├─ opt_step_adamw.comp
│  │     │     ├─ opt_step_sgd.comp
│  │     │     ├─ pad.comp
│  │     │     ├─ pool2d.comp
│  │     │     ├─ quantize_q8_1.comp
│  │     │     ├─ reglu.comp
│  │     │     ├─ relu.comp
│  │     │     ├─ repeat.comp
│  │     │     ├─ repeat_back.comp
│  │     │     ├─ rms_norm.comp
│  │     │     ├─ rms_norm_back.comp
│  │     │     ├─ rms_norm_partials.comp
│  │     │     ├─ roll.comp
│  │     │     ├─ rope_funcs.glsl
│  │     │     ├─ rope_head.glsl
│  │     │     ├─ rope_multi.comp
│  │     │     ├─ rope_neox.comp
│  │     │     ├─ rope_norm.comp
│  │     │     ├─ rope_params.glsl
│  │     │     ├─ rope_vision.comp
│  │     │     ├─ round.comp
│  │     │     ├─ rte.glsl
│  │     │     ├─ scale.comp
│  │     │     ├─ sigmoid.comp
│  │     │     ├─ silu.comp
│  │     │     ├─ silu_back.comp
│  │     │     ├─ sin.comp
│  │     │     ├─ softplus.comp
│  │     │     ├─ soft_max.comp
│  │     │     ├─ soft_max_back.comp
│  │     │     ├─ solve_tri.comp
│  │     │     ├─ sqrt.comp
│  │     │     ├─ square.comp
│  │     │     ├─ ssm_conv.comp
│  │     │     ├─ ssm_scan.comp
│  │     │     ├─ step.comp
│  │     │     ├─ sub.comp
│  │     │     ├─ sum_rows.comp
│  │     │     ├─ sum_rows.glsl
│  │     │     ├─ swiglu.comp
│  │     │     ├─ swiglu_oai.comp
│  │     │     ├─ tanh.comp
│  │     │     ├─ timestep_embedding.comp
│  │     │     ├─ topk_argsort.comp
│  │     │     ├─ topk_moe.comp
│  │     │     ├─ topk_nary_search.comp
│  │     │     ├─ tri.comp
│  │     │     ├─ trunc.comp
│  │     │     ├─ types.glsl
│  │     │     ├─ upscale.comp
│  │     │     ├─ utils.glsl
│  │     │     ├─ vulkan-shaders-gen.cpp
│  │     │     ├─ wkv6.comp
│  │     │     └─ wkv7.comp
│  │     ├─ ggml-webgpu
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ ggml-webgpu.cpp
│  │     │  └─ wgsl-shaders
│  │     │     ├─ binary_head.tmpl
│  │     │     ├─ bin_op.tmpl.wgsl
│  │     │     ├─ common_decls.tmpl
│  │     │     ├─ cpy.tmpl.wgsl
│  │     │     ├─ embed_wgsl.py
│  │     │     ├─ get_rows.tmpl.wgsl
│  │     │     ├─ glu.tmpl.wgsl
│  │     │     ├─ memset.wgsl
│  │     │     ├─ mul_mat.tmpl.wgsl
│  │     │     ├─ mul_mat_decls.tmpl
│  │     │     ├─ mul_mat_reg_tile.tmpl.wgsl
│  │     │     ├─ mul_mat_subgroup_matrix.tmpl.wgsl
│  │     │     ├─ mul_mat_vec.tmpl.wgsl
│  │     │     ├─ rms_norm.wgsl
│  │     │     ├─ rope.tmpl.wgsl
│  │     │     ├─ scale.tmpl.wgsl
│  │     │     ├─ set_rows.tmpl.wgsl
│  │     │     └─ soft_max.tmpl.wgsl
│  │     ├─ ggml-zdnn
│  │     │  ├─ CMakeLists.txt
│  │     │  ├─ common.hpp
│  │     │  ├─ ggml-zdnn.cpp
│  │     │  ├─ mmf.cpp
│  │     │  ├─ mmf.hpp
│  │     │  ├─ utils.cpp
│  │     │  └─ utils.hpp
│  │     ├─ ggml.c
│  │     ├─ ggml.cpp
│  │     └─ gguf.cpp
│  ├─ gguf-py
│  │  ├─ examples
│  │  │  ├─ reader.py
│  │  │  └─ writer.py
│  │  ├─ gguf
│  │  │  ├─ constants.py
│  │  │  ├─ gguf.py
│  │  │  ├─ gguf_reader.py
│  │  │  ├─ gguf_writer.py
│  │  │  ├─ lazy.py
│  │  │  ├─ metadata.py
│  │  │  ├─ py.typed
│  │  │  ├─ quants.py
│  │  │  ├─ scripts
│  │  │  │  ├─ gguf_convert_endian.py
│  │  │  │  ├─ gguf_dump.py
│  │  │  │  ├─ gguf_editor_gui.py
│  │  │  │  ├─ gguf_hash.py
│  │  │  │  ├─ gguf_new_metadata.py
│  │  │  │  └─ gguf_set_metadata.py
│  │  │  ├─ tensor_mapping.py
│  │  │  ├─ utility.py
│  │  │  ├─ vocab.py
│  │  │  └─ __init__.py
│  │  ├─ LICENSE
│  │  ├─ pyproject.toml
│  │  ├─ README.md
│  │  └─ tests
│  │     ├─ test_metadata.py
│  │     ├─ test_quants.py
│  │     └─ __init__.py
│  ├─ grammars
│  │  ├─ arithmetic.gbnf
│  │  ├─ c.gbnf
│  │  ├─ chess.gbnf
│  │  ├─ english.gbnf
│  │  ├─ japanese.gbnf
│  │  ├─ json.gbnf
│  │  ├─ json_arr.gbnf
│  │  ├─ list.gbnf
│  │  └─ README.md
│  ├─ include
│  │  ├─ llama-cpp.h
│  │  └─ llama.h
│  ├─ LICENSE
│  ├─ licenses
│  │  ├─ LICENSE-curl
│  │  ├─ LICENSE-httplib
│  │  ├─ LICENSE-jsonhpp
│  │  └─ LICENSE-linenoise
│  ├─ Makefile
│  ├─ media
│  │  ├─ llama0-banner.png
│  │  ├─ llama0-logo.png
│  │  ├─ llama1-banner.png
│  │  ├─ llama1-icon-transparent.png
│  │  ├─ llama1-icon-transparent.svg
│  │  ├─ llama1-icon.png
│  │  ├─ llama1-icon.svg
│  │  ├─ llama1-logo.png
│  │  ├─ llama1-logo.svg
│  │  ├─ matmul.png
│  │  └─ matmul.svg
│  ├─ models
│  │  ├─ .editorconfig
│  │  ├─ ggml-vocab-aquila.gguf
│  │  ├─ ggml-vocab-baichuan.gguf
│  │  ├─ ggml-vocab-bert-bge.gguf
│  │  ├─ ggml-vocab-bert-bge.gguf.inp
│  │  ├─ ggml-vocab-bert-bge.gguf.out
│  │  ├─ ggml-vocab-command-r.gguf
│  │  ├─ ggml-vocab-command-r.gguf.inp
│  │  ├─ ggml-vocab-command-r.gguf.out
│  │  ├─ ggml-vocab-deepseek-coder.gguf
│  │  ├─ ggml-vocab-deepseek-coder.gguf.inp
│  │  ├─ ggml-vocab-deepseek-coder.gguf.out
│  │  ├─ ggml-vocab-deepseek-llm.gguf
│  │  ├─ ggml-vocab-deepseek-llm.gguf.inp
│  │  ├─ ggml-vocab-deepseek-llm.gguf.out
│  │  ├─ ggml-vocab-falcon.gguf
│  │  ├─ ggml-vocab-falcon.gguf.inp
│  │  ├─ ggml-vocab-falcon.gguf.out
│  │  ├─ ggml-vocab-gpt-2.gguf
│  │  ├─ ggml-vocab-gpt-2.gguf.inp
│  │  ├─ ggml-vocab-gpt-2.gguf.out
│  │  ├─ ggml-vocab-gpt-neox.gguf
│  │  ├─ ggml-vocab-llama-bpe.gguf
│  │  ├─ ggml-vocab-llama-bpe.gguf.inp
│  │  ├─ ggml-vocab-llama-bpe.gguf.out
│  │  ├─ ggml-vocab-llama-spm.gguf
│  │  ├─ ggml-vocab-llama-spm.gguf.inp
│  │  ├─ ggml-vocab-llama-spm.gguf.out
│  │  ├─ ggml-vocab-mpt.gguf
│  │  ├─ ggml-vocab-mpt.gguf.inp
│  │  ├─ ggml-vocab-mpt.gguf.out
│  │  ├─ ggml-vocab-nomic-bert-moe.gguf
│  │  ├─ ggml-vocab-phi-3.gguf
│  │  ├─ ggml-vocab-phi-3.gguf.inp
│  │  ├─ ggml-vocab-phi-3.gguf.out
│  │  ├─ ggml-vocab-qwen2.gguf
│  │  ├─ ggml-vocab-qwen2.gguf.inp
│  │  ├─ ggml-vocab-qwen2.gguf.out
│  │  ├─ ggml-vocab-refact.gguf
│  │  ├─ ggml-vocab-refact.gguf.inp
│  │  ├─ ggml-vocab-refact.gguf.out
│  │  ├─ ggml-vocab-starcoder.gguf
│  │  ├─ ggml-vocab-starcoder.gguf.inp
│  │  ├─ ggml-vocab-starcoder.gguf.out
│  │  └─ templates
│  │     ├─ Apertus-8B-Instruct.jinja
│  │     ├─ ByteDance-Seed-OSS.jinja
│  │     ├─ CohereForAI-c4ai-command-r-plus-tool_use.jinja
│  │     ├─ CohereForAI-c4ai-command-r7b-12-2024-tool_use.jinja
│  │     ├─ deepseek-ai-DeepSeek-R1-Distill-Llama-8B.jinja
│  │     ├─ deepseek-ai-DeepSeek-R1-Distill-Qwen-32B.jinja
│  │     ├─ deepseek-ai-DeepSeek-V3.1.jinja
│  │     ├─ fireworks-ai-llama-3-firefunction-v2.jinja
│  │     ├─ GLM-4.6.jinja
│  │     ├─ google-gemma-2-2b-it.jinja
│  │     ├─ ibm-granite-granite-3.3-2B-Instruct.jinja
│  │     ├─ Kimi-K2-Instruct.jinja
│  │     ├─ Kimi-K2-Thinking.jinja
│  │     ├─ llama-cpp-deepseek-r1.jinja
│  │     ├─ llama-cpp-lfm2.jinja
│  │     ├─ llama-cpp-rwkv-world.jinja
│  │     ├─ meetkai-functionary-medium-v3.1.jinja
│  │     ├─ meetkai-functionary-medium-v3.2.jinja
│  │     ├─ meta-llama-Llama-3.1-8B-Instruct.jinja
│  │     ├─ meta-llama-Llama-3.2-3B-Instruct.jinja
│  │     ├─ meta-llama-Llama-3.3-70B-Instruct.jinja
│  │     ├─ microsoft-Phi-3.5-mini-instruct.jinja
│  │     ├─ MiMo-VL.jinja
│  │     ├─ MiniMax-M2.jinja
│  │     ├─ Mistral-Small-3.2-24B-Instruct-2506.jinja
│  │     ├─ mistralai-Mistral-Nemo-Instruct-2407.jinja
│  │     ├─ moonshotai-Kimi-K2.jinja
│  │     ├─ NousResearch-Hermes-2-Pro-Llama-3-8B-tool_use.jinja
│  │     ├─ NousResearch-Hermes-3-Llama-3.1-8B-tool_use.jinja
│  │     ├─ NVIDIA-Nemotron-Nano-v2.jinja
│  │     ├─ openai-gpt-oss-120b.jinja
│  │     ├─ Qwen-Qwen2.5-7B-Instruct.jinja
│  │     ├─ Qwen-Qwen3-0.6B.jinja
│  │     ├─ Qwen-QwQ-32B.jinja
│  │     ├─ Qwen3-Coder.jinja
│  │     ├─ README.md
│  │     ├─ unsloth-Apriel-1.5.jinja
│  │     └─ unsloth-mistral-Devstral-Small-2507.jinja
│  ├─ mypy.ini
│  ├─ pocs
│  │  ├─ CMakeLists.txt
│  │  └─ vdot
│  │     ├─ CMakeLists.txt
│  │     ├─ q8dot.cpp
│  │     └─ vdot.cpp
│  ├─ poetry.lock
│  ├─ pyproject.toml
│  ├─ pyrightconfig.json
│  ├─ README.md
│  ├─ requirements
│  │  ├─ requirements-all.txt
│  │  ├─ requirements-compare-llama-bench.txt
│  │  ├─ requirements-convert_hf_to_gguf.txt
│  │  ├─ requirements-convert_hf_to_gguf_update.txt
│  │  ├─ requirements-convert_legacy_llama.txt
│  │  ├─ requirements-convert_llama_ggml_to_gguf.txt
│  │  ├─ requirements-convert_lora_to_gguf.txt
│  │  ├─ requirements-gguf_editor_gui.txt
│  │  ├─ requirements-pydantic.txt
│  │  ├─ requirements-server-bench.txt
│  │  ├─ requirements-test-tokenizer-random.txt
│  │  └─ requirements-tool_bench.txt
│  ├─ requirements.txt
│  ├─ scripts
│  │  ├─ apple
│  │  │  ├─ validate-apps.sh
│  │  │  ├─ validate-ios.sh
│  │  │  ├─ validate-macos.sh
│  │  │  ├─ validate-tvos.sh
│  │  │  └─ validate-visionos.sh
│  │  ├─ bench-models.sh
│  │  ├─ build-info.sh
│  │  ├─ check-requirements.sh
│  │  ├─ compare-commits.sh
│  │  ├─ compare-llama-bench.py
│  │  ├─ create_ops_docs.py
│  │  ├─ debug-test.sh
│  │  ├─ fetch_server_test_models.py
│  │  ├─ gen-authors.sh
│  │  ├─ gen-unicode-data.py
│  │  ├─ get-flags.mk
│  │  ├─ get-hellaswag.sh
│  │  ├─ get-pg.sh
│  │  ├─ get-wikitext-103.sh
│  │  ├─ get-wikitext-2.sh
│  │  ├─ get-winogrande.sh
│  │  ├─ get_chat_template.py
│  │  ├─ hf.sh
│  │  ├─ install-oneapi.bat
│  │  ├─ jinja
│  │  │  ├─ jinja-tester.py
│  │  │  └─ requirements.txt
│  │  ├─ server-bench.py
│  │  ├─ snapdragon
│  │  │  ├─ adb
│  │  │  │  ├─ llama-cli.farf
│  │  │  │  ├─ run-bench.sh
│  │  │  │  ├─ run-cli.sh
│  │  │  │  └─ run-tool.sh
│  │  │  └─ qdc
│  │  │     ├─ readme.md
│  │  │     ├─ requirements.txt
│  │  │     └─ tests
│  │  │        └─ test_bench.py
│  │  ├─ sync-ggml-am.sh
│  │  ├─ sync-ggml.last
│  │  ├─ sync-ggml.sh
│  │  ├─ sync_vendor.py
│  │  ├─ tool_bench.py
│  │  ├─ tool_bench.sh
│  │  ├─ verify-checksum-models.py
│  │  └─ xxd.cmake
│  ├─ SECURITY.md
│  ├─ src
│  │  ├─ CMakeLists.txt
│  │  ├─ llama-adapter.cpp
│  │  ├─ llama-adapter.h
│  │  ├─ llama-arch.cpp
│  │  ├─ llama-arch.h
│  │  ├─ llama-batch.cpp
│  │  ├─ llama-batch.h
│  │  ├─ llama-chat.cpp
│  │  ├─ llama-chat.h
│  │  ├─ llama-context.cpp
│  │  ├─ llama-context.h
│  │  ├─ llama-cparams.cpp
│  │  ├─ llama-cparams.h
│  │  ├─ llama-grammar.cpp
│  │  ├─ llama-grammar.h
│  │  ├─ llama-graph.cpp
│  │  ├─ llama-graph.h
│  │  ├─ llama-hparams.cpp
│  │  ├─ llama-hparams.h
│  │  ├─ llama-impl.cpp
│  │  ├─ llama-impl.h
│  │  ├─ llama-io.cpp
│  │  ├─ llama-io.h
│  │  ├─ llama-kv-cache-iswa.cpp
│  │  ├─ llama-kv-cache-iswa.h
│  │  ├─ llama-kv-cache.cpp
│  │  ├─ llama-kv-cache.h
│  │  ├─ llama-kv-cells.h
│  │  ├─ llama-memory-hybrid.cpp
│  │  ├─ llama-memory-hybrid.h
│  │  ├─ llama-memory-recurrent.cpp
│  │  ├─ llama-memory-recurrent.h
│  │  ├─ llama-memory.cpp
│  │  ├─ llama-memory.h
│  │  ├─ llama-mmap.cpp
│  │  ├─ llama-mmap.h
│  │  ├─ llama-model-loader.cpp
│  │  ├─ llama-model-loader.h
│  │  ├─ llama-model-saver.cpp
│  │  ├─ llama-model-saver.h
│  │  ├─ llama-model.cpp
│  │  ├─ llama-model.h
│  │  ├─ llama-quant.cpp
│  │  ├─ llama-quant.h
│  │  ├─ llama-sampling.cpp
│  │  ├─ llama-sampling.h
│  │  ├─ llama-vocab.cpp
│  │  ├─ llama-vocab.h
│  │  ├─ llama.cpp
│  │  ├─ models
│  │  │  ├─ afmoe.cpp
│  │  │  ├─ apertus.cpp
│  │  │  ├─ arcee.cpp
│  │  │  ├─ arctic.cpp
│  │  │  ├─ arwkv7.cpp
│  │  │  ├─ baichuan.cpp
│  │  │  ├─ bailingmoe.cpp
│  │  │  ├─ bailingmoe2.cpp
│  │  │  ├─ bert.cpp
│  │  │  ├─ bitnet.cpp
│  │  │  ├─ bloom.cpp
│  │  │  ├─ chameleon.cpp
│  │  │  ├─ chatglm.cpp
│  │  │  ├─ codeshell.cpp
│  │  │  ├─ cogvlm.cpp
│  │  │  ├─ cohere2-iswa.cpp
│  │  │  ├─ command-r.cpp
│  │  │  ├─ dbrx.cpp
│  │  │  ├─ deci.cpp
│  │  │  ├─ deepseek.cpp
│  │  │  ├─ deepseek2.cpp
│  │  │  ├─ dots1.cpp
│  │  │  ├─ dream.cpp
│  │  │  ├─ ernie4-5-moe.cpp
│  │  │  ├─ ernie4-5.cpp
│  │  │  ├─ exaone.cpp
│  │  │  ├─ exaone4.cpp
│  │  │  ├─ falcon-h1.cpp
│  │  │  ├─ falcon.cpp
│  │  │  ├─ gemma-embedding.cpp
│  │  │  ├─ gemma.cpp
│  │  │  ├─ gemma2-iswa.cpp
│  │  │  ├─ gemma3-iswa.cpp
│  │  │  ├─ gemma3n-iswa.cpp
│  │  │  ├─ glm4-moe.cpp
│  │  │  ├─ glm4.cpp
│  │  │  ├─ gpt2.cpp
│  │  │  ├─ gptneox.cpp
│  │  │  ├─ granite-hybrid.cpp
│  │  │  ├─ granite.cpp
│  │  │  ├─ graph-context-mamba.cpp
│  │  │  ├─ grok.cpp
│  │  │  ├─ grovemoe.cpp
│  │  │  ├─ hunyuan-dense.cpp
│  │  │  ├─ hunyuan-moe.cpp
│  │  │  ├─ internlm2.cpp
│  │  │  ├─ jais.cpp
│  │  │  ├─ jamba.cpp
│  │  │  ├─ lfm2.cpp
│  │  │  ├─ llada-moe.cpp
│  │  │  ├─ llada.cpp
│  │  │  ├─ llama-iswa.cpp
│  │  │  ├─ llama.cpp
│  │  │  ├─ mamba.cpp
│  │  │  ├─ minicpm3.cpp
│  │  │  ├─ minimax-m2.cpp
│  │  │  ├─ models.h
│  │  │  ├─ mpt.cpp
│  │  │  ├─ nemotron-h.cpp
│  │  │  ├─ nemotron.cpp
│  │  │  ├─ neo-bert.cpp
│  │  │  ├─ olmo.cpp
│  │  │  ├─ olmo2.cpp
│  │  │  ├─ olmoe.cpp
│  │  │  ├─ openai-moe-iswa.cpp
│  │  │  ├─ openelm.cpp
│  │  │  ├─ orion.cpp
│  │  │  ├─ pangu-embedded.cpp
│  │  │  ├─ phi2.cpp
│  │  │  ├─ phi3.cpp
│  │  │  ├─ plamo.cpp
│  │  │  ├─ plamo2.cpp
│  │  │  ├─ plm.cpp
│  │  │  ├─ qwen.cpp
│  │  │  ├─ qwen2.cpp
│  │  │  ├─ qwen2moe.cpp
│  │  │  ├─ qwen2vl.cpp
│  │  │  ├─ qwen3.cpp
│  │  │  ├─ qwen3moe.cpp
│  │  │  ├─ qwen3next.cpp
│  │  │  ├─ qwen3vl-moe.cpp
│  │  │  ├─ qwen3vl.cpp
│  │  │  ├─ refact.cpp
│  │  │  ├─ rnd1.cpp
│  │  │  ├─ rwkv6-base.cpp
│  │  │  ├─ rwkv6.cpp
│  │  │  ├─ rwkv6qwen2.cpp
│  │  │  ├─ rwkv7-base.cpp
│  │  │  ├─ rwkv7.cpp
│  │  │  ├─ seed-oss.cpp
│  │  │  ├─ smallthinker.cpp
│  │  │  ├─ smollm3.cpp
│  │  │  ├─ stablelm.cpp
│  │  │  ├─ starcoder.cpp
│  │  │  ├─ starcoder2.cpp
│  │  │  ├─ t5-dec.cpp
│  │  │  ├─ t5-enc.cpp
│  │  │  ├─ wavtokenizer-dec.cpp
│  │  │  └─ xverse.cpp
│  │  ├─ unicode-data.cpp
│  │  ├─ unicode-data.h
│  │  ├─ unicode.cpp
│  │  └─ unicode.h
│  ├─ tests
│  │  ├─ CMakeLists.txt
│  │  ├─ get-model.cpp
│  │  ├─ get-model.h
│  │  ├─ run-json-schema-to-grammar.mjs
│  │  ├─ test-alloc.cpp
│  │  ├─ test-arg-parser.cpp
│  │  ├─ test-autorelease.cpp
│  │  ├─ test-backend-ops.cpp
│  │  ├─ test-barrier.cpp
│  │  ├─ test-c.c
│  │  ├─ test-chat-parser.cpp
│  │  ├─ test-chat-template.cpp
│  │  ├─ test-chat.cpp
│  │  ├─ test-double-float.cpp
│  │  ├─ test-gbnf-validator.cpp
│  │  ├─ test-gguf.cpp
│  │  ├─ test-grammar-integration.cpp
│  │  ├─ test-grammar-llguidance.cpp
│  │  ├─ test-grammar-parser.cpp
│  │  ├─ test-json-partial.cpp
│  │  ├─ test-json-schema-to-grammar.cpp
│  │  ├─ test-llama-grammar.cpp
│  │  ├─ test-log.cpp
│  │  ├─ test-lora-conversion-inference.sh
│  │  ├─ test-model-load-cancel.cpp
│  │  ├─ test-mtmd-c-api.c
│  │  ├─ test-opt.cpp
│  │  ├─ test-quantize-fns.cpp
│  │  ├─ test-quantize-perf.cpp
│  │  ├─ test-quantize-stats.cpp
│  │  ├─ test-regex-partial.cpp
│  │  ├─ test-rope.cpp
│  │  ├─ test-sampling.cpp
│  │  ├─ test-thread-safety.cpp
│  │  ├─ test-tokenizer-0.cpp
│  │  ├─ test-tokenizer-0.py
│  │  ├─ test-tokenizer-0.sh
│  │  ├─ test-tokenizer-1-bpe.cpp
│  │  ├─ test-tokenizer-1-spm.cpp
│  │  ├─ test-tokenizer-random.py
│  │  └─ test-tokenizers-repo.sh
│  ├─ tools
│  │  ├─ batched-bench
│  │  │  ├─ batched-bench.cpp
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ README.md
│  │  ├─ CMakeLists.txt
│  │  ├─ cvector-generator
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ completions.txt
│  │  │  ├─ cvector-generator.cpp
│  │  │  ├─ mean.hpp
│  │  │  ├─ negative.txt
│  │  │  ├─ pca.hpp
│  │  │  ├─ positive.txt
│  │  │  └─ README.md
│  │  ├─ export-lora
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ export-lora.cpp
│  │  │  └─ README.md
│  │  ├─ gguf-split
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ gguf-split.cpp
│  │  │  ├─ README.md
│  │  │  └─ tests.sh
│  │  ├─ imatrix
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ imatrix.cpp
│  │  │  └─ README.md
│  │  ├─ llama-bench
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ llama-bench.cpp
│  │  │  └─ README.md
│  │  ├─ main
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ main.cpp
│  │  │  └─ README.md
│  │  ├─ mtmd
│  │  │  ├─ clip-impl.h
│  │  │  ├─ clip.cpp
│  │  │  ├─ clip.h
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ deprecation-warning.cpp
│  │  │  ├─ legacy-models
│  │  │  │  ├─ convert_image_encoder_to_gguf.py
│  │  │  │  ├─ glmedge-convert-image-encoder-to-gguf.py
│  │  │  │  ├─ glmedge-surgery.py
│  │  │  │  ├─ llava_surgery.py
│  │  │  │  ├─ llava_surgery_v2.py
│  │  │  │  ├─ minicpmv-convert-image-encoder-to-gguf.py
│  │  │  │  └─ minicpmv-surgery.py
│  │  │  ├─ mtmd-audio.cpp
│  │  │  ├─ mtmd-audio.h
│  │  │  ├─ mtmd-cli.cpp
│  │  │  ├─ mtmd-helper.cpp
│  │  │  ├─ mtmd-helper.h
│  │  │  ├─ mtmd.cpp
│  │  │  ├─ mtmd.h
│  │  │  ├─ README.md
│  │  │  ├─ requirements.txt
│  │  │  ├─ test-1.jpeg
│  │  │  ├─ test-2.mp3
│  │  │  └─ tests.sh
│  │  ├─ perplexity
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ perplexity.cpp
│  │  │  └─ README.md
│  │  ├─ quantize
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ quantize.cpp
│  │  │  ├─ README.md
│  │  │  └─ tests.sh
│  │  ├─ rpc
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ README.md
│  │  │  └─ rpc-server.cpp
│  │  ├─ run
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ linenoise.cpp
│  │  │  │  ├─ linenoise.cpp
│  │  │  │  └─ linenoise.h
│  │  │  ├─ README.md
│  │  │  └─ run.cpp
│  │  ├─ server
│  │  │  ├─ bench
│  │  │  │  ├─ bench.py
│  │  │  │  ├─ prometheus.yml
│  │  │  │  ├─ README.md
│  │  │  │  ├─ requirements.txt
│  │  │  │  └─ script.js
│  │  │  ├─ chat-llama2.sh
│  │  │  ├─ chat.mjs
│  │  │  ├─ chat.sh
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ public
│  │  │  │  ├─ index.html.gz
│  │  │  │  └─ loading.html
│  │  │  ├─ public_legacy
│  │  │  │  ├─ colorthemes.css
│  │  │  │  ├─ completion.js
│  │  │  │  ├─ favicon.ico
│  │  │  │  ├─ index-new.html
│  │  │  │  ├─ index.html
│  │  │  │  ├─ index.js
│  │  │  │  ├─ json-schema-to-grammar.mjs
│  │  │  │  ├─ loading.html
│  │  │  │  ├─ prompt-formats.js
│  │  │  │  ├─ style.css
│  │  │  │  ├─ system-prompts.js
│  │  │  │  ├─ theme-beeninorder.css
│  │  │  │  ├─ theme-ketivah.css
│  │  │  │  ├─ theme-mangotango.css
│  │  │  │  ├─ theme-playground.css
│  │  │  │  ├─ theme-polarnight.css
│  │  │  │  └─ theme-snowstorm.css
│  │  │  ├─ public_simplechat
│  │  │  │  ├─ datautils.mjs
│  │  │  │  ├─ index.html
│  │  │  │  ├─ readme.md
│  │  │  │  ├─ simplechat.css
│  │  │  │  ├─ simplechat.js
│  │  │  │  ├─ simplechat_screens.webp
│  │  │  │  └─ ui.mjs
│  │  │  ├─ README.md
│  │  │  ├─ server-common.cpp
│  │  │  ├─ server-common.h
│  │  │  ├─ server-http.cpp
│  │  │  ├─ server-http.h
│  │  │  ├─ server-queue.cpp
│  │  │  ├─ server-queue.h
│  │  │  ├─ server-task.cpp
│  │  │  ├─ server-task.h
│  │  │  ├─ server.cpp
│  │  │  ├─ tests
│  │  │  │  ├─ conftest.py
│  │  │  │  ├─ pytest.ini
│  │  │  │  ├─ README.md
│  │  │  │  ├─ requirements.txt
│  │  │  │  ├─ tests.sh
│  │  │  │  ├─ unit
│  │  │  │  │  ├─ test_basic.py
│  │  │  │  │  ├─ test_chat_completion.py
│  │  │  │  │  ├─ test_compat_anthropic.py
│  │  │  │  │  ├─ test_completion.py
│  │  │  │  │  ├─ test_ctx_shift.py
│  │  │  │  │  ├─ test_embedding.py
│  │  │  │  │  ├─ test_infill.py
│  │  │  │  │  ├─ test_lora.py
│  │  │  │  │  ├─ test_rerank.py
│  │  │  │  │  ├─ test_security.py
│  │  │  │  │  ├─ test_slot_save.py
│  │  │  │  │  ├─ test_speculative.py
│  │  │  │  │  ├─ test_template.py
│  │  │  │  │  ├─ test_tokenize.py
│  │  │  │  │  ├─ test_tool_call.py
│  │  │  │  │  └─ test_vision_api.py
│  │  │  │  └─ utils.py
│  │  │  ├─ themes
│  │  │  │  ├─ buttons-top
│  │  │  │  │  ├─ buttons_top.png
│  │  │  │  │  ├─ favicon.ico
│  │  │  │  │  ├─ index.html
│  │  │  │  │  └─ README.md
│  │  │  │  ├─ README.md
│  │  │  │  └─ wild
│  │  │  │     ├─ favicon.ico
│  │  │  │     ├─ index.html
│  │  │  │     ├─ llamapattern.png
│  │  │  │     ├─ llama_cpp.png
│  │  │  │     ├─ README.md
│  │  │  │     └─ wild.png
│  │  │  └─ webui
│  │  │     ├─ .npmrc
│  │  │     ├─ .prettierignore
│  │  │     ├─ .prettierrc
│  │  │     ├─ .storybook
│  │  │     │  ├─ main.ts
│  │  │     │  ├─ ModeWatcherDecorator.svelte
│  │  │     │  ├─ preview.ts
│  │  │     │  ├─ TooltipProviderDecorator.svelte
│  │  │     │  └─ vitest.setup.ts
│  │  │     ├─ components.json
│  │  │     ├─ e2e
│  │  │     │  └─ demo.test.ts
│  │  │     ├─ eslint.config.js
│  │  │     ├─ package-lock.json
│  │  │     ├─ package.json
│  │  │     ├─ playwright.config.ts
│  │  │     ├─ README.md
│  │  │     ├─ scripts
│  │  │     │  ├─ dev.sh
│  │  │     │  ├─ install-git-hooks.sh
│  │  │     │  └─ post-build.sh
│  │  │     ├─ src
│  │  │     │  ├─ app.css
│  │  │     │  ├─ app.d.ts
│  │  │     │  ├─ app.html
│  │  │     │  ├─ demo.spec.ts
│  │  │     │  ├─ lib
│  │  │     │  │  ├─ components
│  │  │     │  │  │  ├─ app
│  │  │     │  │  │  │  ├─ chat
│  │  │     │  │  │  │  │  ├─ ChatAttachments
│  │  │     │  │  │  │  │  │  ├─ ChatAttachmentPreview.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatAttachmentsList.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatAttachmentsViewAll.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatAttachmentThumbnailFile.svelte
│  │  │     │  │  │  │  │  │  └─ ChatAttachmentThumbnailImage.svelte
│  │  │     │  │  │  │  │  ├─ ChatForm
│  │  │     │  │  │  │  │  │  ├─ ChatForm.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatFormActions
│  │  │     │  │  │  │  │  │  │  ├─ ChatFormActionFileAttachments.svelte
│  │  │     │  │  │  │  │  │  │  ├─ ChatFormActionRecord.svelte
│  │  │     │  │  │  │  │  │  │  └─ ChatFormActions.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatFormFileInputInvisible.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatFormHelperText.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatFormModelSelector.svelte
│  │  │     │  │  │  │  │  │  └─ ChatFormTextarea.svelte
│  │  │     │  │  │  │  │  ├─ ChatMessages
│  │  │     │  │  │  │  │  │  ├─ ChatMessage.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatMessageActions.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatMessageAssistant.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatMessageBranchingControls.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatMessages.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatMessageThinkingBlock.svelte
│  │  │     │  │  │  │  │  │  └─ ChatMessageUser.svelte
│  │  │     │  │  │  │  │  ├─ ChatScreen
│  │  │     │  │  │  │  │  │  ├─ ChatScreen.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatScreenDragOverlay.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatScreenHeader.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatScreenProcessingInfo.svelte
│  │  │     │  │  │  │  │  │  └─ ChatScreenWarning.svelte
│  │  │     │  │  │  │  │  ├─ ChatSettings
│  │  │     │  │  │  │  │  │  ├─ ChatSettings.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatSettingsFields.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatSettingsFooter.svelte
│  │  │     │  │  │  │  │  │  ├─ ChatSettingsImportExportTab.svelte
│  │  │     │  │  │  │  │  │  └─ ChatSettingsParameterSourceIndicator.svelte
│  │  │     │  │  │  │  │  └─ ChatSidebar
│  │  │     │  │  │  │  │     ├─ ChatSidebar.svelte
│  │  │     │  │  │  │  │     ├─ ChatSidebarActions.svelte
│  │  │     │  │  │  │  │     ├─ ChatSidebarConversationItem.svelte
│  │  │     │  │  │  │  │     ├─ ChatSidebarSearch.svelte
│  │  │     │  │  │  │  │     └─ handle-mobile-sidebar-item-click.ts
│  │  │     │  │  │  │  ├─ index.ts
│  │  │     │  │  │  │  ├─ misc
│  │  │     │  │  │  │  │  ├─ ActionButton.svelte
│  │  │     │  │  │  │  │  ├─ ActionDropdown.svelte
│  │  │     │  │  │  │  │  ├─ CodePreviewDialog.svelte
│  │  │     │  │  │  │  │  ├─ ConversationSelection.svelte
│  │  │     │  │  │  │  │  ├─ KeyboardShortcutInfo.svelte
│  │  │     │  │  │  │  │  ├─ MarkdownContent.svelte
│  │  │     │  │  │  │  │  └─ RemoveButton.svelte
│  │  │     │  │  │  │  └─ server
│  │  │     │  │  │  │     ├─ ServerErrorSplash.svelte
│  │  │     │  │  │  │     ├─ ServerInfo.svelte
│  │  │     │  │  │  │     ├─ ServerLoadingSplash.svelte
│  │  │     │  │  │  │     └─ ServerStatus.svelte
│  │  │     │  │  │  └─ ui
│  │  │     │  │  │     ├─ alert-dialog
│  │  │     │  │  │     │  ├─ alert-dialog-action.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-cancel.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-content.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-description.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-footer.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-header.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-overlay.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-title.svelte
│  │  │     │  │  │     │  ├─ alert-dialog-trigger.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ badge
│  │  │     │  │  │     │  ├─ badge.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ button
│  │  │     │  │  │     │  ├─ button.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ card
│  │  │     │  │  │     │  ├─ card-action.svelte
│  │  │     │  │  │     │  ├─ card-content.svelte
│  │  │     │  │  │     │  ├─ card-description.svelte
│  │  │     │  │  │     │  ├─ card-footer.svelte
│  │  │     │  │  │     │  ├─ card-header.svelte
│  │  │     │  │  │     │  ├─ card-title.svelte
│  │  │     │  │  │     │  ├─ card.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ checkbox
│  │  │     │  │  │     │  ├─ checkbox.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ collapsible
│  │  │     │  │  │     │  ├─ collapsible-content.svelte
│  │  │     │  │  │     │  ├─ collapsible-trigger.svelte
│  │  │     │  │  │     │  ├─ collapsible.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ dialog
│  │  │     │  │  │     │  ├─ dialog-close.svelte
│  │  │     │  │  │     │  ├─ dialog-content.svelte
│  │  │     │  │  │     │  ├─ dialog-description.svelte
│  │  │     │  │  │     │  ├─ dialog-footer.svelte
│  │  │     │  │  │     │  ├─ dialog-header.svelte
│  │  │     │  │  │     │  ├─ dialog-overlay.svelte
│  │  │     │  │  │     │  ├─ dialog-title.svelte
│  │  │     │  │  │     │  ├─ dialog-trigger.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ dropdown-menu
│  │  │     │  │  │     │  ├─ dropdown-menu-checkbox-item.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-content.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-group-heading.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-group.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-item.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-label.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-radio-group.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-radio-item.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-separator.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-shortcut.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-sub-content.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-sub-trigger.svelte
│  │  │     │  │  │     │  ├─ dropdown-menu-trigger.svelte
│  │  │     │  │  │     │  └─ index.ts
│  │  │     │  │  │     ├─ input
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  └─ input.svelte
│  │  │     │  │  │     ├─ label
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  └─ label.svelte
│  │  │     │  │  │     ├─ scroll-area
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  ├─ scroll-area-scrollbar.svelte
│  │  │     │  │  │     │  └─ scroll-area.svelte
│  │  │     │  │  │     ├─ select
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  ├─ select-content.svelte
│  │  │     │  │  │     │  ├─ select-group-heading.svelte
│  │  │     │  │  │     │  ├─ select-group.svelte
│  │  │     │  │  │     │  ├─ select-item.svelte
│  │  │     │  │  │     │  ├─ select-label.svelte
│  │  │     │  │  │     │  ├─ select-scroll-down-button.svelte
│  │  │     │  │  │     │  ├─ select-scroll-up-button.svelte
│  │  │     │  │  │     │  ├─ select-separator.svelte
│  │  │     │  │  │     │  └─ select-trigger.svelte
│  │  │     │  │  │     ├─ separator
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  └─ separator.svelte
│  │  │     │  │  │     ├─ sheet
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  ├─ sheet-close.svelte
│  │  │     │  │  │     │  ├─ sheet-content.svelte
│  │  │     │  │  │     │  ├─ sheet-description.svelte
│  │  │     │  │  │     │  ├─ sheet-footer.svelte
│  │  │     │  │  │     │  ├─ sheet-header.svelte
│  │  │     │  │  │     │  ├─ sheet-overlay.svelte
│  │  │     │  │  │     │  ├─ sheet-title.svelte
│  │  │     │  │  │     │  └─ sheet-trigger.svelte
│  │  │     │  │  │     ├─ sidebar
│  │  │     │  │  │     │  ├─ constants.ts
│  │  │     │  │  │     │  ├─ context.svelte.ts
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  ├─ sidebar-content.svelte
│  │  │     │  │  │     │  ├─ sidebar-footer.svelte
│  │  │     │  │  │     │  ├─ sidebar-group-action.svelte
│  │  │     │  │  │     │  ├─ sidebar-group-content.svelte
│  │  │     │  │  │     │  ├─ sidebar-group-label.svelte
│  │  │     │  │  │     │  ├─ sidebar-group.svelte
│  │  │     │  │  │     │  ├─ sidebar-header.svelte
│  │  │     │  │  │     │  ├─ sidebar-input.svelte
│  │  │     │  │  │     │  ├─ sidebar-inset.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-action.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-badge.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-button.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-item.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-skeleton.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-sub-button.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-sub-item.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu-sub.svelte
│  │  │     │  │  │     │  ├─ sidebar-menu.svelte
│  │  │     │  │  │     │  ├─ sidebar-provider.svelte
│  │  │     │  │  │     │  ├─ sidebar-rail.svelte
│  │  │     │  │  │     │  ├─ sidebar-separator.svelte
│  │  │     │  │  │     │  ├─ sidebar-trigger.svelte
│  │  │     │  │  │     │  └─ sidebar.svelte
│  │  │     │  │  │     ├─ skeleton
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  └─ skeleton.svelte
│  │  │     │  │  │     ├─ textarea
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  └─ textarea.svelte
│  │  │     │  │  │     ├─ tooltip
│  │  │     │  │  │     │  ├─ index.ts
│  │  │     │  │  │     │  ├─ tooltip-content.svelte
│  │  │     │  │  │     │  └─ tooltip-trigger.svelte
│  │  │     │  │  │     └─ utils.ts
│  │  │     │  │  ├─ constants
│  │  │     │  │  │  ├─ auto-scroll.ts
│  │  │     │  │  │  ├─ binary-detection.ts
│  │  │     │  │  │  ├─ debounce.ts
│  │  │     │  │  │  ├─ input-classes.ts
│  │  │     │  │  │  ├─ latex-protection.ts
│  │  │     │  │  │  ├─ literal-html.ts
│  │  │     │  │  │  ├─ localstorage-keys.ts
│  │  │     │  │  │  ├─ max-bundle-size.ts
│  │  │     │  │  │  ├─ precision.ts
│  │  │     │  │  │  ├─ processing-info.ts
│  │  │     │  │  │  ├─ settings-config.ts
│  │  │     │  │  │  ├─ supported-file-types.ts
│  │  │     │  │  │  ├─ table-html-restorer.ts
│  │  │     │  │  │  ├─ tooltip-config.ts
│  │  │     │  │  │  └─ viewport.ts
│  │  │     │  │  ├─ enums
│  │  │     │  │  │  └─ files.ts
│  │  │     │  │  ├─ hooks
│  │  │     │  │  │  ├─ is-mobile.svelte.ts
│  │  │     │  │  │  └─ use-processing-state.svelte.ts
│  │  │     │  │  ├─ markdown
│  │  │     │  │  │  ├─ literal-html.ts
│  │  │     │  │  │  └─ table-html-restorer.ts
│  │  │     │  │  ├─ services
│  │  │     │  │  │  ├─ chat.ts
│  │  │     │  │  │  ├─ index.ts
│  │  │     │  │  │  ├─ models.ts
│  │  │     │  │  │  ├─ parameter-sync.spec.ts
│  │  │     │  │  │  ├─ parameter-sync.ts
│  │  │     │  │  │  └─ slots.ts
│  │  │     │  │  ├─ stores
│  │  │     │  │  │  ├─ chat.svelte.ts
│  │  │     │  │  │  ├─ database.ts
│  │  │     │  │  │  ├─ models.svelte.ts
│  │  │     │  │  │  ├─ persisted.svelte.ts
│  │  │     │  │  │  ├─ server.svelte.ts
│  │  │     │  │  │  └─ settings.svelte.ts
│  │  │     │  │  ├─ types
│  │  │     │  │  │  ├─ api.d.ts
│  │  │     │  │  │  ├─ chat.d.ts
│  │  │     │  │  │  ├─ database.d.ts
│  │  │     │  │  │  ├─ models.d.ts
│  │  │     │  │  │  └─ settings.d.ts
│  │  │     │  │  └─ utils
│  │  │     │  │     ├─ api-key-validation.ts
│  │  │     │  │     ├─ audio-recording.ts
│  │  │     │  │     ├─ autoresize-textarea.ts
│  │  │     │  │     ├─ branching.ts
│  │  │     │  │     ├─ config-helpers.ts
│  │  │     │  │     ├─ conversation-utils.ts
│  │  │     │  │     ├─ convert-files-to-extra.ts
│  │  │     │  │     ├─ copy.ts
│  │  │     │  │     ├─ file-preview.ts
│  │  │     │  │     ├─ file-type.ts
│  │  │     │  │     ├─ is-ime-composing.ts
│  │  │     │  │     ├─ latex-protection.test.ts
│  │  │     │  │     ├─ latex-protection.ts
│  │  │     │  │     ├─ modality-file-validation.ts
│  │  │     │  │     ├─ model-names.test.ts
│  │  │     │  │     ├─ model-names.ts
│  │  │     │  │     ├─ pdf-processing.ts
│  │  │     │  │     ├─ portal-to-body.ts
│  │  │     │  │     ├─ precision.ts
│  │  │     │  │     ├─ process-uploaded-files.ts
│  │  │     │  │     ├─ svg-to-png.ts
│  │  │     │  │     ├─ text-files.ts
│  │  │     │  │     └─ webp-to-png.ts
│  │  │     │  ├─ routes
│  │  │     │  │  ├─ +error.svelte
│  │  │     │  │  ├─ +layout.svelte
│  │  │     │  │  ├─ +page.svelte
│  │  │     │  │  ├─ +page.ts
│  │  │     │  │  ├─ chat
│  │  │     │  │  │  └─ [id]
│  │  │     │  │  │     ├─ +page.svelte
│  │  │     │  │  │     └─ +page.ts
│  │  │     │  │  └─ page.svelte.test.ts
│  │  │     │  ├─ stories
│  │  │     │  │  ├─ ChatForm.stories.svelte
│  │  │     │  │  ├─ ChatMessage.stories.svelte
│  │  │     │  │  ├─ ChatSettings.stories.svelte
│  │  │     │  │  ├─ ChatSidebar.stories.svelte
│  │  │     │  │  ├─ fixtures
│  │  │     │  │  │  ├─ ai-tutorial.ts
│  │  │     │  │  │  ├─ api-docs.ts
│  │  │     │  │  │  ├─ assets
│  │  │     │  │  │  │  ├─ 1.jpg
│  │  │     │  │  │  │  ├─ beautiful-flowers-lotus.webp
│  │  │     │  │  │  │  ├─ example.pdf
│  │  │     │  │  │  │  └─ hf-logo.svg
│  │  │     │  │  │  ├─ blog-post.ts
│  │  │     │  │  │  ├─ data-analysis.ts
│  │  │     │  │  │  ├─ empty.ts
│  │  │     │  │  │  ├─ math-formulas.ts
│  │  │     │  │  │  ├─ readme.ts
│  │  │     │  │  │  └─ storybook-mocks.ts
│  │  │     │  │  ├─ Introduction.mdx
│  │  │     │  │  └─ MarkdownContent.stories.svelte
│  │  │     │  └─ styles
│  │  │     │     └─ katex-custom.scss
│  │  │     ├─ static
│  │  │     │  ├─ favicon.svg
│  │  │     │  └─ loading.html
│  │  │     ├─ svelte.config.js
│  │  │     ├─ tsconfig.json
│  │  │     ├─ vite.config.ts
│  │  │     └─ vitest-setup-client.ts
│  │  ├─ tokenize
│  │  │  ├─ CMakeLists.txt
│  │  │  └─ tokenize.cpp
│  │  └─ tts
│  │     ├─ CMakeLists.txt
│  │     ├─ convert_pt_to_hf.py
│  │     ├─ README.md
│  │     ├─ tts-outetts.py
│  │     └─ tts.cpp
│  └─ vendor
│     ├─ cpp-httplib
│     │  ├─ CMakeLists.txt
│     │  ├─ httplib.cpp
│     │  └─ httplib.h
│     ├─ miniaudio
│     │  └─ miniaudio.h
│     ├─ minja
│     │  ├─ chat-template.hpp
│     │  └─ minja.hpp
│     ├─ nlohmann
│     │  ├─ json.hpp
│     │  └─ json_fwd.hpp
│     └─ stb
│        └─ stb_image.h
├─ my-ai-app
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ B1.jpg
│  ├─ B1.png
│  ├─ B2.jpg
│  ├─ breadicon.png
│  ├─ breakfast1.jpg
│  ├─ breakfast2.jpg
│  ├─ breakfast3.jpg
│  ├─ chef.png
│  ├─ chef1.png
│  ├─ chef2.jpg
│  ├─ chef2.png
│  ├─ chef3.jpg
│  ├─ chef3.png
│  ├─ chef4.jpg
│  ├─ chef4.png
│  ├─ cicon.png
│  ├─ dessert1.jpg
│  ├─ dessert2.jpg
│  ├─ dessert3.jpg
│  ├─ dinner1.jpg
│  ├─ dinner2.jpg
│  ├─ dinner3.jpg
│  ├─ emailicon.png
│  ├─ ficon.png
│  ├─ foodicon.png
│  ├─ i1.jpg
│  ├─ i1.png
│  ├─ i2.jpg
│  ├─ i2.png
│  ├─ icon.png
│  ├─ l1.png
│  ├─ logo.png
│  ├─ lunch1.jpg
│  ├─ lunch2.jpg
│  ├─ lunch3.jpg
│  ├─ phoneicon.png
│  ├─ react.svg
│  ├─ Sb1.jpg
│  ├─ SB1.png
│  ├─ sb2.jpg
│  ├─ tea1.jpg
│  ├─ tea2.jpg
│  ├─ tea3.jpg
│  ├─ ticon.png
│  ├─ traingle.png
│  ├─ vite.svg
│  ├─ wine1.jpg
│  ├─ wine2.jpg
│  └─ wine3.jpg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ B1.jpg
│  │  ├─ B1.png
│  │  ├─ B2.jpg
│  │  ├─ breadicon.png
│  │  ├─ breakfast1.jpg
│  │  ├─ breakfast2.jpg
│  │  ├─ breakfast3.jpg
│  │  ├─ chef.png
│  │  ├─ chef1.png
│  │  ├─ chef2.jpg
│  │  ├─ chef2.png
│  │  ├─ chef3.jpg
│  │  ├─ chef3.png
│  │  ├─ chef4.jpg
│  │  ├─ chef4.png
│  │  ├─ cicon.png
│  │  ├─ dessert1.jpg
│  │  ├─ dessert2.jpg
│  │  ├─ dessert3.jpg
│  │  ├─ dinner1.jpg
│  │  ├─ dinner2.jpg
│  │  ├─ dinner3.jpg
│  │  ├─ emailicon.png
│  │  ├─ ficon.png
│  │  ├─ foodicon.png
│  │  ├─ i1.jpg
│  │  ├─ i1.png
│  │  ├─ i2.jpg
│  │  ├─ i2.png
│  │  ├─ icon.png
│  │  ├─ l1.png
│  │  ├─ logo.png
│  │  ├─ lunch1.jpg
│  │  ├─ lunch2.jpg
│  │  ├─ lunch3.jpg
│  │  ├─ phoneicon.png
│  │  ├─ react.svg
│  │  ├─ sb1.jpg
│  │  ├─ sb2.jpg
│  │  ├─ tea1.jpg
│  │  ├─ tea2.jpg
│  │  ├─ tea3.jpg
│  │  ├─ ticon.png
│  │  ├─ traingle.png
│  │  ├─ wine1.jpg
│  │  ├─ wine2.jpg
│  │  └─ wine3.jpg
│  ├─ components
│  │  ├─ About.jsx
│  │  ├─ Chef.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Home.jsx
│  │  ├─ Menu.jsx
│  │  ├─ Navbar.jsx
│  │  └─ Reservation.jsx
│  ├─ index.css
│  └─ main.jsx
└─ vite.config.js

```