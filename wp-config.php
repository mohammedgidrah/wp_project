<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_project' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'GaCL&zxja5a7{J]KDf7a*nexo)LQ{&SO&]-J^HKx_bRRATT*x-)Gq)iuXB@&/`&h' );
define( 'SECURE_AUTH_KEY',  'z#5!V&}s* -Z;I}`D8[qh?w).,x%50U7LOf)*x9]!;u$J?[bY>fgOlHBDF@]Ug!/' );
define( 'LOGGED_IN_KEY',    '4O3wCgo;Di/1;N+wIjW>EzYQ# cj~F6uY8zi:F2U;FnLH|,a|BvD36B2?4^haO;~' );
define( 'NONCE_KEY',        'q4/opA-EZKTn|F*7g9xN65Hd3?lH:KuAAv<K@rF8AwM)HDD%U/fB/1vc5v8/bW>X' );
define( 'AUTH_SALT',        '9rXj8zXj3DiJSV6}P_OobICg}sQjux?-1%cu(Kg0?_]G^dl[zZYZSoBNqdMxH.9H' );
define( 'SECURE_AUTH_SALT', '=Cx.,bX!u=O-zaO##IB=)P:)I,0r7,(l-40?ldL=:n-MR*w|Oua;{cCwX0L|-:&D' );
define( 'LOGGED_IN_SALT',   'xfA@nQ?pG;yE]Kt*#o3;w *yg$$kWa%2VKE;yem6r3DRD@r{[tX$dHirZy=:?6E`' );
define( 'NONCE_SALT',       'W(@;aoX$}2 ~fd4I(DLx#*>MTPK*#D8f}D^$j*&SF^-;[&dn~L]Q6K8J9y`H_K4T' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
