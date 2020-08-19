(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{363:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pipelining-package-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipelining-package-tasks"}},[e._v("#")]),e._v(" Pipelining package tasks")]),e._v(" "),a("p",[e._v("In the traditional monorepo task runners, like "),a("code",[e._v("lerna")]),e._v(", each npm lifecycle script like "),a("code",[e._v("build")]),e._v(" or "),a("code",[e._v("test")]),e._v(" is run topologically or in parallel individually. Depending on the graph of the packages, CPU cores are left idle wasting developer time.")]),e._v(" "),a("p",[e._v("Futhermore, the developer is expected to keep track of an "),a("strong",[e._v("implicit")]),e._v(" graph of the tasks. For example, the developer is expected to understand that perhaps the "),a("code",[e._v("test")]),e._v(" task is only available after "),a("code",[e._v("build")]),e._v(" has completed.")]),e._v(" "),a("p",[a("code",[e._v("lage")]),e._v(" gives developers a way to specify these relationships "),a("strong",[e._v("explicitly")]),e._v(". The advantage here are two fold. First, incoming new developers can look at "),a("code",[e._v("lage.config.js")]),e._v(" and understand how tasks are related. Second, "),a("code",[e._v("lage")]),e._v(" can use this explicit declaration to perform an optimized build based on the abundant availability of multi-core processors.")]),e._v(" "),a("h2",{attrs:{id:"defining-a-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-pipeline"}},[e._v("#")]),e._v(" Defining a pipeline")]),e._v(" "),a("p",[e._v("To define the task dependency graph, use the "),a("code",[e._v("pipeline")]),e._v(" key in the "),a("code",[e._v("lage.config.js")]),e._v(". For example, this is the default generated configuration when you run "),a("code",[e._v("npx lage init")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  pipeline"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    lint"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"task-dependency-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-dependency-format"}},[e._v("#")]),e._v(" Task dependency format")]),e._v(" "),a("p",[e._v("What you are declaring here in the "),a("code",[e._v("pipeline")]),e._v(" object of the configuration is a dependency graph of tasks. The "),a("code",[e._v("test")]),e._v(" task above depends on the "),a("code",[e._v("build")]),e._v(" task of the same package. The dependencies of "),a("code",[e._v("test")]),e._v(" is an array, so it actually can depend on multiple tasks. This may be more relevant in a more complex monorepo.")]),e._v(" "),a("h3",{attrs:{id:"topological-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topological-dependency"}},[e._v("#")]),e._v(" Topological dependency")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("^")]),e._v(" symbol explicitly declares that the task has a package-topological dependency on another task. For example, if "),a("code",[e._v("foo")]),e._v(" package depends on "),a("code",[e._v("bar")]),e._v(", "),a("code",[e._v("lage build")]),e._v(" will guarantee that the "),a("code",[e._v("build")]),e._v(" task of "),a("code",[e._v("bar")]),e._v(" will happen before "),a("code",[e._v("foo")]),e._v("'s "),a("code",[e._v("build")]),e._v(" task.")]),e._v(" "),a("h3",{attrs:{id:"empty-dependency-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#empty-dependency-list"}},[e._v("#")]),e._v(" Empty dependency list")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("lint")]),e._v(" task above has NO dependencies. This means that it can start whenever it can!")]),e._v(" "),a("h3",{attrs:{id:"tasks-that-are-in-the-pipeline-but-not-in-some-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tasks-that-are-in-the-pipeline-but-not-in-some-package-json"}},[e._v("#")]),e._v(" Tasks that are in the "),a("code",[e._v("pipeline")]),e._v(" but not in SOME "),a("code",[e._v("package.json")])]),e._v(" "),a("p",[e._v("Sometimes tasks declared in the "),a("code",[e._v("pipeline")]),e._v(" are not present in all packages' "),a("code",[e._v("package.json")]),e._v(" files. "),a("code",[e._v("lage")]),e._v(" will automatically ignore those. No problem!")]),e._v(" "),a("h3",{attrs:{id:"pipeline-tasks-are-the-only-ones-that-lage-knows-about"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-tasks-are-the-only-ones-that-lage-knows-about"}},[e._v("#")]),e._v(" Pipeline tasks are the only ones that "),a("code",[e._v("lage")]),e._v(" knows about")]),e._v(" "),a("p",[a("code",[e._v("lage")]),e._v(" will only account for tasks declared in the "),a("code",[e._v("pipeline")]),e._v(" configuration. If it's not listed there, "),a("code",[e._v("lage")]),e._v(" will not know how to run them.")]),e._v(" "),a("h3",{attrs:{id:"specific-package-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-package-tasks"}},[e._v("#")]),e._v(" Specific package tasks")]),e._v(" "),a("p",[e._v("Sometimes it becomes necessary to manually place a package-task dependency on another package-task. This can occur especially in repos that are just coming off of a lerna or rush repository where the tasks are traditionally run in separate phases. Sometimes assumptions were made those repositories that are not expressable in the simple task pipeline configuration as seen above. For thoes cases, simply place those alongside with the rest of the pipeline configuration like this:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  pipeline"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    build"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    lint"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo#build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bar#test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("In this example, we illustrate a "),a("code",[e._v("build")]),e._v(" script of "),a("code",[e._v("foo")]),e._v(" package depends on the "),a("code",[e._v("test")]),e._v(" script of "),a("code",[e._v("bar")]),e._v(". The syntax is "),a("code",[e._v("[package]#[task]")]),e._v(".")]),e._v(" "),a("p",[e._v("This seems like it goes against the "),a("code",[e._v('test: ["build"]')]),e._v(", but it does not. Since "),a("code",[e._v("test")]),e._v(" scripts does not have a topological dependency, it theoretically can get triggered anytime its own package's "),a("code",[e._v("build")]),e._v(" script has finished! The general guidance is to get rid of these specific package-task to package-task dependency in the pipeline as quickly as possible so the builds can be optimized better.")])])}),[],!1,null,null,null);t.default=n.exports}}]);