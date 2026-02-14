# Configuration EmailJS pour les demandes de devis

Ce guide explique comment configurer EmailJS pour recevoir les demandes de devis par email.

## Étape 1: Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up Free" pour créer un compte gratuit
3. Choisissez le plan gratuit (200 emails/mois)

## Étape 2: Configurer le service email

1. Dans le tableau de bord EmailJS, cliquez sur **Email Services** → **Add New Service**
2. Choisissez **Gmail** ou un autre service SMTP
3. Suivez les instructions pour connecter votre compte email
4. Donnez un nom au service (ex: `service_semanbtp`)
5. Notez l'ID du service (ex: `service_xxxxxxxx`)

## Étape 3: Créer le template d'email

1. Cliquez sur **Email Templates** → **Create New Template**
2. Utilisez l'éditeur pour créer votre template

Voici un exemple de template:

```html
Nouveau demande de devis - SEMAN BTP
=====================================

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact du site SEMAN BTP
```

3. Configurez les champs du template:
   - `from_name` → Nom du client
   - `from_email` → Email du client
   - `phone` → Téléphone du client
   - `subject` → Sujet sélectionné
   - `message` → Message du client

4. Dans les paramètres du template, configurez:
   - **To Email**: `semanbtp59@gmail.com`
   - **Subject**: `Nouveau devis - {{from_name}}`

5. Sauvegardez le template et notez son ID (ex: `template_xxxxxxxx`)

## Étape 4: Obtenir votre Public Key

1. Allez dans **Account** → **API Keys** ou cliquez sur votre profil
2. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxxxxxxx`)

## Étape 5: Configurer les variables d'environnement

1. Dupliquez le fichier `.env.example` et renommez-le en `.env`
2. Remplacez les valeurs par vos identifiants:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxx
```

## Étape 6: Tester

1. Lancez l'application: `npm run dev`
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. Vérifiez que vous recevez l'email à `semanbtp59@gmail.com`

## Dépannage

### L'email n'est pas envoyé
- Vérifiez que les variables d'environnement sont correctement configurées
- Consultez la console du navigateur pour les erreurs
- Vérifiez les logs dans le tableau de bord EmailJS

### Erreur CORS
- Assurez-vous d'avoir ajouté votre domaine dans les paramètres EmailJS (Account → Domain Settings)

### Limites du plan gratuit
- Le plan gratuit permet 200 emails par mois
- Pour plus d'emails, passez à un plan payant
