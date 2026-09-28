allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

val newBuildDir: Directory = rootProject.layout.buildDirectory.dir("../../build").get()
rootProject.layout.buildDirectory.value(newBuildDir)

subprojects {
    val newSubprojectBuildDir: Directory = newBuildDir.dir(project.name)
    project.layout.buildDirectory.value(newSubprojectBuildDir)
}
subprojects {
    if (project != rootProject && project.name != "app") {
        project.evaluationDependsOn(":app")
    }
}

subprojects {
    val proj = this
    val applyNamespaceAction = {
        if (proj.hasProperty("android")) {
            val android = proj.extensions.getByName("android") as com.android.build.gradle.BaseExtension
            
            // Attempt to Set Java 11 for all subprojects safely
            try {
                android.compileOptions.sourceCompatibility = JavaVersion.VERSION_11
                android.compileOptions.targetCompatibility = JavaVersion.VERSION_11
            } catch (e: Exception) {
                // Ignore finalized or locked properties
            }
            
            if (android.namespace == null) {
                android.namespace = "com.velmess.billing." + proj.name
            }
            
            // EMERGENCY PATCH for legacy plugins like blue_thermal_printer
            if (proj.name == "blue_thermal_printer") {
                val manifestFile = file("src/main/AndroidManifest.xml")
                if (manifestFile.exists()) {
                    val content = manifestFile.readText()
                    if (content.contains("package=")) {
                        manifestFile.writeText(content.replace(Regex("package=\"[^\"]*\""), ""))
                    }
                }
            }
        }
    }

    if (proj.state.executed) {
        applyNamespaceAction()
    } else {
        proj.afterEvaluate {
            applyNamespaceAction()
        }
    }
}


fun Project.configureNamespace() {
    if (this.hasProperty("android")) {
        try {
            val android = this.extensions.getByName("android") as com.android.build.gradle.BaseExtension
            if (android.namespace == null) {
                android.namespace = "com.velmess.billing." + this.name
            }
        } catch (e: Exception) { }
    }
}

tasks.register<Delete>("clean") {
    delete(rootProject.layout.buildDirectory)
}
