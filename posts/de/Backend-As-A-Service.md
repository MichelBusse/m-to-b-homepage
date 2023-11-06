---
date: '2023-10-31'
title: "Was ist Backend-As-A-Service (BaaS)?"
description: "Als Backend-As-A-Service (BaaS) werden Cloud-Lösungen bezeichnet, die den typischen Administrationsaufwand minimieren und so den Entwicklungsprozess beschleunigen können."
image: "/images/blog/backend-as-a-service.png"
---

So wie viele App-Entwickler müssen wir uns regelmäßig mit der Frage beschäftigen, welches Backend für unsere Anwendungen das jeweils Passende ist. Dabei besteht die Hauptauswahl zwischen zwei Alternativen: Ein klassischer Server oder eine Backend-As-A-Service-Lösung.
Während man bei einem klassischen Server die vollkommene Kontrolle über alle Verbindungen bis ins kleinste Detail hat, bietet letzteres den Vorteil, dass man sich eben nicht um die Standardfunktionen, wie Authentifizierung, Sicherheit, Datenbankanbindung und Serverinfrastruktur kümmern muss. Bei Backend-As-A-Service verwendet man eine fertige Plattform, die alle wichtigen Funktionen bereits implementiert hat. So kann man sich direkt mit den tatsächlichen App-Features beschäftigen und spart sich den administrativen Aufwand außenrum.

Die verbreitetste Backend-As-A-Service-Lösung ist Google Firebase, eine ausgereifte Plattform, die mächtige Funktionen in fast allen Bereichen bietet (A/B Testing, Datenbanken, Push-Notifications, Cloud Functions, …). Firebase kommt mit einem Pay-As-You-Go-Preissystem. Das bedeutet, es bietet sehr günstige Einstiegspreise und wird dann mit steigendem Volumen teurer. Zu beachten ist, dass Firebase nicht Open-Source ist, nicht selbst gehostet werden kann und ein späterer Datenexport häufig sehr aufwändig sein kann (nicht zuletzt durch das Firebase-exklusive Datenbanksystem).

Als Alternative zu Firebase haben wir deshalb bereits mit den Plattformen Appwrite und Supabase gearbeitet. Beides sind Open-Source-Projekte, die in Konkurrenz zu Firebase ziehen, aber beide sind auch noch aktiv in Entwicklung. Während sich Appwrite eher für simplere Anwendungen eignet, da hier vor allem die Berechtigungs-Einstellungen nur sehr oberflächlich sind, bietet Supabase schon eine echte Alternative zu Googles Firebase.
Wir konnten schon ganze Apps mit Supabase realisieren und waren begeistert von den vielen Möglichkeiten, die trotz seiner Neuheit schon vorhanden sind. Mit Authentifizierung, einem PostreSQL-Datenbanksystem, Cloud Funktionen und Echtzeit-Übertragungen bietet Supabase bereits alle Features, die für die App-Entwicklung nötig sind.
Doch auch hier muss erwähnt werden, dass Supabase mit steigenden Kapazitäten mehr Serverressourcen und somit steigende Kosten verursacht. Welche Plattform bei hohem Volumen die wie sich Supabase dann tatsächlich mit hunderttausenden Nutzern schlägt, bleibt abzuwarten, da hier noch die nötigen Referenz-Projekte fehlen.

Schlussendlich bleibt die Entscheidung, welches Backend man für seine App verwendet. Wirklich etwas falsch machen wird man weder mit Firebase noch mit Supabase. Hier bleibt nur die Wahl ob man den Fokus auf ein ausgereiftes und bewährtes System, oder eine höhere Flexibilität legen möchte. 🚀

