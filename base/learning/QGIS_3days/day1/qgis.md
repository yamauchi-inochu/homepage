# QGISビギナーズマニュアル
　本教材は、QGIS入門者向けの実習用教材です。QGISを実際に操作しながら、空間データの表示、シンボルの変更、地図のレイアウト等を学習することができます。

**Menu**
----------
* [QGISとは？](#qgisとは？)
* [起動](#起動)
* [ウインドウ](#ウインドウ)
* [各種ボタン](#各種ボタン)
* [データの読み込み](#データの読み込み)
* [機能説明](#機能説明)
* [属性テーブル](#属性テーブル)
* [プロパティ](#プロパティ)
* [地図タイルの読み込み](#地図タイルの読み込み)
* [地図のレイアウト](#地図のレイアウト)
* [作業ファイルの保存](#作業ファイルの保存)
* [プラグイン](#プラグイン)
* [データの保存形式](#データの保存形式)

**実習用データ**

実習をはじめる前に、[tokyo.zip]をダウンロードしてください。

[tokyo.zip]:https://github.com/gis-oer/datasets/raw/master/tokyo.zip

## QGISとは？
　QGISは、無償で利用できるオープンソース（GNU General Public License v2で提供）のGISです。Windows,Mac,Linux,Unix, Androidなど様々な環境で動作します。様々なプラグインや、GRASSやPostGISなど他のオープンソースGISと連携して使用することで、多種類の分析が可能です。GISの基本操作に必要な機能を網羅しているだけでなく、Web上に多数のマニュアルがアップロードされているため、GISの学習がしやすいソフトウェアです。  

> http://qgis.org/ja/site/about/index.html を参考に作成

[▲メニューへもどる]

## 起動
　デスクトップのQGISアイコンをダブルクリックする。しばらくするとQGISが起動する。
![起動](pic/Qpic5.png)

最初にQGIS3を起動した時には、下記の様に古いバージョンのGIS2からの設定を取り込むか聞かれることがある。この演習ではQGIS2とは関係なくQGIS3を利用するため、「QGIS 2の設定をインポートせずクリーンな状態でスタートする」を選択する。この設定は最初の1回のみで済む。
![起動](pic/first_question.jpg)

[▲メニューへもどる]

## ウインドウ
　QGISを起動すると、下の図のようなウィンドウが表示されます。ウインドウ上のアイコンの配置は自由に変更することができます。アイコンのない箇所（グレーの部分）で右クリックして出てくる「パネル」メニューからパネルを選択することにより、別機能のパネルを呼び出すことができます。アイコンの数は、インストールしているプラグインの数によっても異なります。そのため、インストール直後のQGISと教材の画像が異なっていることを確認してください。
![ウインドウ](pic/Qpic6.png)

[▲メニューへもどる]

## 各種ボタン
　以下では、QGISで主に使用するボタンについて解説しています。

![ボタンA](pic/Qpic7.png)
1. QGISファイルを保存
2. 名前をつけてQGISファイルを保存
3. 地図移動
4. 地図の拡大と縮小
5. 選択領域にズーム
6. 動作の前後移動
7. 地物情報の表示
8. 選択と選択取り消し
9. 長さ、面積計測（手動）
10. レイヤ編集
11. レイヤの読み込み


また、ウィンドウの下部にはカーソルの座標や縮尺、拡大、回転、座標系などを確認できるツールバーがあります。

![ボタンB](pic/Qpic8.png)

[▲メニューへもどる]

## データの読み込み
　GISでは、位置情報を保持するベクトルデータとラスタデータを用いて、空間分析等を行います。各データの特徴は、[GISの基本概念_ベクトルデータとラスタデータ](../00/00.md)を参照してください。以下では、代表的なデータ形式を取り上げ、それらをQGISで読み込む手法について解説します。教材中に記載されている使用データ([tokyo.zip])を用意してください。そして、tokyo.zipファイルをダウンロード後に解凍してください）。

### ベクトルデータ読み込み
以下では、GISで扱う代表的なベクトルデータ形式のシェープファイルを読み込む手法について解説する。シェープファイルの特徴は、[GISの基本概念_シェープファイル](../00/00.md)を参照してください。

`データソースマネージャーを開く`のアイコンをクリックし、`ベクタ`のタブに切り替える。エンコーディングをUTF-8とし、ソースから、cvs_jgd2011_9.shpを指定する。`追加`をクリックするとデータが表示される。
![ベクタ](pic/Qpic9.png)

![ベクタ](pic/Qpic10.png)

上記のように、cvs_jgd2011_9.shpを読み込むと、東京23区内のコンビニが表示される（ポイントデータ）。ベクトルデータには、ポイント、ライン、ポリゴンのデータ形式がある。ラインとポリゴンも同様の手法で読み込むことができる。

#### ライン
東京周辺の河川(river_9kei.shp)を表示する。
![ベクタ](pic/Qpic11.png)

#### ポリゴン
東京23区のエリア(tokyo_23ku_jgd2011_9.shp)を表示する。
![ベクタ](pic/Qpic12.png)

【註】ここまで続けてベクトルデータを読み込むと、ポイントの上にラインが被さり、さらにポリゴンのデータが被さって表示されます。これはレイヤーで後から読み込んだものが、一番上に表示されるためです。3つのデータがうまく表示されるように、レイヤーパネルでレイヤー名をドラッグしてレイヤー順番を変えます。委細については、後の「レイヤ構造」で説明します。

### ラスタデータの読み込み
以下では、GISで扱う代表的なラスタデータ形式のGeotiffを読み込む手法について解説する。`データソースマネージャーを開く`のアイコンをクリックし、`ラスタ`のタブに切り替える。ソースから、tokyo_srtm.tifを指定し追加をクリックする。
![ラスタ](pic/Qpic13.png)

![ラスタ](pic/Qpic14.png)

#### テキストデータ読み込み
以下では、GISで扱う代表的なテキストファイルであるCSV形式のデータを読み込む手法について解説する。`データソースマネージャーを開く`のアイコンをクリックし、`デリミティッドテキスト`のタブに切り替える。ファイル名から、post_office.csvを指定する。X,Yフィールドに対応する緯度経度があれば指定し、緯度経度がなければジオメトリなしにチェックをする(ここでは、`ジオメトリ定義＞ジオメトリなし`にチェックを入れてください。)。
![CSV](pic/Qpic15.png)

【註】本実習のCSVファイルはUTF-8エンコーディングで作成されています。GGIS3のデフォルトでのエンコーディング（レイヤ名の横で指定できます）はUTF-8になっていますのでこのままで結構です。ただ、Windowsで作成されるCSVファイルはShift-JIS形式で作成されていることが多いので、その場合はエンコーディング形式を「Shift-JIS」に選択する必要があります。エンコーディングが正しく設定されているかは、サンプルデータの表示が適切になされていることで確認することができます。

[▲メニューへもどる]

## レイヤ構造
　GISでは、レイヤ構造に従ってデータの切り替えや重ね合わせを行います。以下では、レイヤの切り替え、重ね合わせ、削除の手法を解説します。

### レイヤ表示の切替
各レイヤの横にあるチェックボックスにチェックをいれると、地図表示画面にレイヤが表示される。
![CSV](pic/Qpic16.png)

### レイヤの重ね合わせ
レイヤウィンドウでレイヤを上下にずらすと、地図表示画面が連動して切り替わる。
![CSV](pic/Qpic17.png)

### レイヤの削除
レイヤウィンドウでレイヤの上で右クリックし、`レイヤの削除`をクリックする。この処理では、レイヤウィンドウ上からレイヤが消えるのみで、データそのものは削除されていない点に注意する。
![CSV](pic/Qpic18.png)

[▲メニューへもどる]

## 機能説明
　QGISには、地図のレイアウト、データの作成、分析など様々な機能があります。以下では、QGISの機能について説明しています。

![機能説明a](pic/Qpic19.png)
プロジェクト：QGIS（.qgs）ファイルの保存や読み込み、地図のレイアウト、エクスポートができる。

編集：ベクタレイヤの編集ができる。編集状態になると、アクティブになる。

![機能説明b](pic/Qpic20.png)
ビュー：地図の移動や拡大、縮小など、地図画面の操作ができる。

レイヤ：ベクタやラスタなどのレイヤが追加できる。

ポイント、ライン、ポリゴン新規レイヤの作成もできる。

![機能説明c](pic/Qpic21.png)
設定：オプションから、プロジェクトの設定やスナップオプションが設定できる。

プラグイン：プラグインの管理とインストールができる。Python入力画面が開ける。

![機能説明d](pic/Qpic22.png)
ベクタ：バッファやクリップなどベクタに関する処理ができる。

ラスタ：斜面方位図や陰影図の作成などラスタに関する処理ができる。

![機能説明e](pic/Qpic23.png)
データベース：PostGISなどのデータベースへの接続やeVisプラグインによる外部ファイルとの連携が可能。

Web：背景地図の設定やweb地図の書き出しができる（プラグインによる）。

![機能説明f](pic/Qpic24.png)
プロッセッシング：他のGISソフトウェアと連携して操作ができる（R,GRASS,SAGAなどがQGIS内で処理できる）。

ヘルプ：QGISのヘルプが確認できる。

[▲メニューへもどる]

## 属性テーブル
　ベクトルデータは、複数の属性情報を保持することができます。以下では、QGISで属性情報を参照する手法について、解説しています。

**以下では、cvs_jgd2011_9.shpのみ利用します。不要なレイヤを削除してください。**

データを読み込み、レイヤウィンドウのレイヤの上で右クリックすると、属性テーブルを開くことができる。
![属性テーブルa](pic/Qpic25.png)

属性テーブルで選択したものは、地図上で黄色で表示される。選択アイコンで地図上の地物を選択した場合は、その地物に対応する属性テーブルの行が選択される。
地図上の地物を選択した時に、そのままでは属性テーブルの中で全てのデータが表示され、選択したものがわかりにくい時がある。その時には属性テーブルの下部にあるポップアップメニューから「選択した地物を表示する」を選択し、選択された地物に関する属性だけが表示されるようにすることで見やすくなります。
なお、ポリゴンによる選択（選択ボタンの右側にある小さな三角を押すとポップアップメニューが表示され、ポリゴン、フリーハンド等が選択できます）は、右クリックで終了し、フリーハンドによる選択は左クリックで終了と、操作性に一貫がなく分かりにくい状態です。

![属性テーブルb](pic/Qpic26.png)

[▲メニューへもどる]

## プロパティ
　QGISでは、レイヤごとにレイヤのプロパティから、データの表示情報やスタイルの変更ができます。ポイントでは形や大きさ、ラインでは線の形や太さ、ポリゴンでは塗りつぶしの色等を変更することができます。属性情報に応じて、スタイルを分けることもできます。これは、レイヤの表示が変化するのみの処理で、データそのものの形状は変更されません。

以下では、レイヤのプロパティについて解説し、ポイントデータのスタイルの変更を行います。

レイヤウインドウからプロパティを表示したいレイヤを選択し、右クリックからプロパティをクリックする。
![プロパティ](pic/Qpic27.png)

### ソース
座標系を確認したり、文字コード、表示名の変更がきます。
![一般情報](pic/Qpic28.png)

### シンボロジー
データのスタイルを整えることができる機能です。データの値に応じて配色やスタイルを変えることができます。分類方法は「単一シンボル」、「分類された」、「段階に分けられた」等があります。

ここでは、ポイントデータの大きさと色を変更します。`単一シンボル`を選択し、色と大きさを指定する。指定できた状態で`OK`をクリックすると変更が適用される。
![スタイルa](pic/Qpic29.png)

以下のように、形を変更することもできる。
![スタイルb](pic/Qpic30.png)

属性テーブルの値によって、大きさと色を変更するには、シンボロジーの画面の一番上にあるポップアップメニューにおいて、`分類された`を選択し、分類したいフィールドを選択する。

ここではコンビニごとに色を変更するため、「カラム」フィールドのポップアップメニューから`name_en`を選択する。この状態で、左下の「分類」ボタンをクリックすると、自動的に`name_en`の値による色分けが生成される。各色は、シンボルをダブルクリックすることで調整でき、凡例（ラベル）も変更できる。
![スタイルc](pic/Qpic31.png)

最後に、不要な分類を選択し削除する。`OK`をクリックすると変更が適用される。
![スタイルc](pic/Qpic32.png)

### ラベル
データを表示する際に、属性情報に基づいてラベルを作成する機能です。以下では、属性値を用いて、ラベルを表示する手法について解説しています。

デフォルトでは「ラベルなし」になっているので、`ラベル`のポップアップメニューを選択し、`単一のラベル`を指定し、ラベルのもととなる属性を指定する。ここでは、`name_en`を指定する。`OK`をクリックすると変更が適用され、地図上にラベルが表示される。
![スタイルc](pic/Qpic33.png)

[▲メニューへもどる]

## 地図タイルの読み込み
　以下では、QGISにXYZタイル形式の背景地図（地理院タイル等）を読み込む手法について解説します。

アイコンが並ぶ箇所（グレーの個所）で右クリックし、`パネル＞ブラウザパネル`をクリックする。`ブラウザパネル＞XYZ Tiles`を探し、右クリックし`新しい接続`をクリックする。
![xyz](pic/Qpic34.png)

国土地理院の[地理院タイル]のページから、`２．基本測量成果以外で出典の記載のみで利用可能なもの＞タイル一覧＞空中写真・衛星画像＞2007年～`を選択し、URLをコピーする。コピーしたURL、名前、ズームレベルを以下のように設定する。`OK`をクリックすると、ブラウザパネルにタイルが追加される。追加されたタイルをクリックすると、レイヤウィンドウにレイヤとして追加でき、地図も表示される。

![xyz](pic/Qpic35.png)

![xyz](pic/Qpic36.png)

※ 地理院タイルを利用する場合は、利用規約に従ってください。

【註】画像上に地物のラベルを重ね合わせて表示すると、ラベルが画像に紛れて読みにくいことがあります。そのような場合は、レイヤプロパティ＞ラベル＞バッファにて、「テキストバッファを描画する」をクリックし、テキストを縁取り表示させることで見やすくなります。

### XYZタイルの一括読み込み
事前にタイル情報を記述したxmlファイルを用いて、`接続をロード`から、複数のタイルをを一括で読み込むことが可能です。ここでは、使用データのファイル内にある`gisoer_tiles.xml`を利用します。

> gisoer_tilesは、株式会社MIERUNEの[GitHub(MIERUNE/mierune-qgis)](https://github.com/MIERUNE/mierune-qgis)を参考に作成したものです。

![xyz](pic/Qpic37.png)

[▲メニューへもどる]

## 地図のレイアウト
　以下では、スタイリングしたデータと地理院タイルを用いて、地図をレイアウトして画像として出力する手法について解説します。この実習をはじめる前に、地図画面を任意の地域に拡大してください（以下では、東京大学本郷キャンパス周辺を表示しています）。

`プロジェクト＞新規プリントレイアウト`を選択し、タイトル（地図名など任意）を入力する。データが重ならない場合は、オンザフライCRS投影がうまくいっていない可能性があるので、QGISを再起動する。その後、サンプルデータ、XYZタイルの順で読み込む。
![地図のレイアウト](pic/Qpic38.png)

### プリントコンポーザ
プリントレイアウトでは、以下の機能を利用して地図を作成することができる。
![プリントコンポーザ](pic/Qpic39.png)
1. アイテムの選択と移動
2. 地図の移動
3. 地図の追加
4. 画像の追加
5. テキストの追加
6. 凡例の追加
7. 縮尺バーの追加
8. 地図の出力

※アイテムの削除は編集から行う。

#### レイアウト

以下のような地図を作成するため、地図、縮尺バー、凡例、タイトル等を追加する。

![レイアウト](pic/Qpic40.png)

#### 地図の追加
地図の追加ボタンをクリックし、地図のレイアウト画面上でドラッグして大きさを指定して、地図を追加する。※追加される地図は、QGISで表示している範囲となる。
![レイアウト](pic/Qpic41.png)

#### 縮尺バーの追加
　以下のように、矢印の位置をクリックし、縮尺バーを追加する（ドラッグでの追加も可能）。縮尺バーを選択した状態で、アイテムプロパティのタブに切り替え、線分列の大きさの値等を変更する。
![縮尺](pic/Qpic42.png)

![縮尺](pic/Qpic43.png)

#### 凡例の追加
縮尺と同様に凡例を追加する。凡例を選択し、アイテムプロパティで調整する。自動アップデートのチェックをはずすと凡例が編集できる。名称の変更、凡例項目の追加と削除ができる。
![凡例](pic/Qpic44.png)

![凡例](pic/Qpic45.png)

凡例に余白ができる場合は、`アイテムプロパティ`の`凡例アイテム`で地理院タイルを最下段に配置し、`メインプロパティ`の`大きさを内容にあわせる`のチェックをはずす。その後、手動で大きさを変更する。

#### 方位記号の追加
画像の追加から方位記号を追加する。`アイテムプロパティ＞検索ディレクトリ`をクリックし、方位記号を選択する。デフォルトの状態では、図の赤枠部分をクリックしないと検索ディレクトリが開かないため、注意する。以下のように、アイテムプロパティで、画像の調節を行う。
![方位](pic/Qpic46.png)

#### テキストの追加
テキストの追加からテキストを追加する。メインプロパティに入力したいテキストを記述する。
![text](pic/Qpic47.png)

以下のように、フォントのサイズや配置等を調節する。
![text](pic/Qpic48.png)

同様の手法で、任意の個所に、背景地図やデータのライセンス等必要な情報をテキストで追加する。

### 画像の出力
地図のレイアウトを整えた後、画像としてエクスポートする。`レイアウト＞画像としてエクスポート`を選択する。
![エクスポート](pic/Qpic49.png)

エクスポートした画像ファイルをダブルクリックすると、以下のような地図が表示できる。画像を出力した後、プリントレイアウトを閉じる。
![エクスポートを表示](pic/Qpic50.png)

### QGISのビュー上に凡例と方位記号を表示する
`ビュー>地図装飾`を選択する。地図装飾からスケールバー、方位記号を追加する。それぞれの表示にチェックを入れ、形式や配置を調整し`OK`をクリックする。
![view](pic/Qpic51.png)

以下のように、QGISのビュー上に縮尺と方位記号が表示される。
![ビューb](pic/Qpic52.png)

## 作業ファイルの保存
QGISには、作業ファイルを保存する機能がある。これにより、一度QGISを閉じた後でも、前回の状態から作業を再開することができる。

`プロジェクト＞名前を付けて保存`をクリックし、任意の名称で出力する。次回開くときは、出力した.qgzファイルをダブルクリックするとQGISが立ち上がる。
![save](pic/Qpic53.png)

【註】Macではインストール後に.qgzファイルとQGIS3の関連付けがなされていませんので、クリックしたときにアプリケーションの選択を聞かれますので、そこでQGIS3を「開くアプリケーション」として指定してください。

[▲メニューへもどる]

## プラグイン
　QGISでは、オフィシャルプラグインリポジトリ等から、様々な拡張機能をプラグインとしてインストールできます。プラグインをインストールすることにより、様々な処理が可能になります。**プラグインの実際の使用法は、他の教材で解説しているため、ここではインストール方法のみ解説しています。**

`プラグイン＞プラグインの管理とインストール`を選択する。
![プラグインのインストール](pic/Qpic54.png)

検索から、インストールしたいプラグインを検索する。例として、以下のような便利なプラグインがある。
【註】OpenLayers Pluginのように、プラグイン＞設定にて「実験的プラグインも表示する」にチェックを入れないと検索候補として表示されないものもあります。

![プラグインの例](pic/Qpic55.png)  

## データの保存形式
　GISでは、Shapefile（シェープファイル）形式のベクトルデータを用いることが多いです。しかし、使用するソフトウェアやアプリケーションによっては、別の形式のファイルを使用します。ここでは、QGISによるデータのエクスポートについて解説します。

レイヤの上で右クリックし名前をつけて保存をクリックする。QGISでは、シェープファイル以外にも、KMLやCSV等、様々な形式のデータを出力することができる。
![データの保存](pic/Qpic59.png)

KMLは、Google Earthで利用できる形式である。Cesiumなどを利用することで、Web上でも表現しやすいデータである。
![KML](pic/Qpic60.png)
上の図は、東京駅から東京タワーまでの道のりを表示したもの。

CSVは、カンマで区切られたデータ形式である。座標値をもっていればCartoなどで簡単にWeb GISとして表現できる。
![CSV](pic/Qpic61.png)
上の図は、裾野市オープンデータ　広域避難地・市指定避難所データを加工したものを利用し作成したもの

[▲メニューへもどる]

#### この教材の[課題ページ_QGISビギナーズマニュアル]へ進む

#### ライセンスに関する注意事項
本教材で利用しているキャプチャ画像の出典やクレジットについては、[その他のライセンスについて]よりご確認ください。

[▲メニューへもどる]:./QGIS.md#Menu

[QGIS API Documentation]:http://www.qgis.org/api/index.html
[利用規約]:../../policy.md
[その他のライセンスについて]:../license.md
[よくある質問とエラー]:../questions/questions.md

[GISの基本概念]:../00/00.md
[QGISビギナーズマニュアル]:../QGIS/QGIS.md
[GRASSビギナーズマニュアル]:../GRASS/GRASS.md
[リモートセンシングとその解析]:../06/06.md
[既存データの地図データと属性データ]:../07/07.md
[空間データ]:../08/08.md
[空間データベース]:../09/09.md
[空間データの統合・修正]:../10/10.md
[基本的な空間解析]:../11/11.md
[ネットワーク分析]:../12/12.md
[領域分析]:../13/13.md
[点データの分析]:../14/14.md
[ラスタデータの分析]:../15/15.md
[傾向面分析]:../16/16.md
[空間的自己相関]:../17/17.md
[空間補間]:../18/18.md
[空間相関分析]:../19/19.md
[空間分析におけるスケール]:../20/20.md
[視覚的伝達]:../21/21.md
[参加型GISと社会貢献]:../26/26.md

[地理院地図]:https://maps.gsi.go.jp
[e-Stat]:https://www.e-stat.go.jp/
[国土数値情報]:http://nlftp.mlit.go.jp/ksj/
[基盤地図情報]:http://www.gsi.go.jp/kiban/
[地理院タイル]:http://maps.gsi.go.jp/development/ichiran.html


[スライド_GISの基本概念]:https://github.com/gis-oer/gis-oer/raw/master/materials/00/00.pptx
[スライド_QGISビギナーズマニュアル]:https://github.com/gis-oer/gis-oer/raw/master/materials/QGIS/QGIS.pptx
[スライド_GRASSビギナーズマニュアル]:https://github.com/gis-oer/gis-oer/raw/master/materials/GRASS/GRASS.pptx
[スライド_リモートセンシングとその解析]:https://github.com/gis-oer/gis-oer/raw/master/materials/06/06.pptx
[スライド_既存データの地図データと属性データ]:https://github.com/gis-oer/gis-oer/raw/master/materials/07/07.pptx
[スライド_空間データ]:https://github.com/gis-oer/gis-oer/raw/master/materials/08/08.pptx
[スライド_空間データベース]:https://github.com/gis-oer/gis-oer/raw/master/materials/09/09.pptx
[スライド_空間データの統合・修正]:https://github.com/gis-oer/gis-oer/raw/master/materials/10/10.pptx
[スライド_基本的な空間解析]:https://github.com/gis-oer/gis-oer/raw/master/materials/11/11.pptx
[スライド_ネットワーク分析]:https://github.com/gis-oer/gis-oer/raw/master/materials/12/12.pptx
[スライド_領域分析]:https://github.com/gis-oer/gis-oer/raw/master/materials/13/13.pptx
[スライド_点データの分析]:https://github.com/gis-oer/gis-oer/raw/master/materials/14/14.pptx
[スライド_ラスタデータの分析]:https://github.com/gis-oer/gis-oer/raw/master/materials/15/15.pptx
[スライド_空間補間]:https://github.com/gis-oer/gis-oer/raw/master/materials/18/18.pptx
[スライド_視覚的伝達]:https://github.com/gis-oer/gis-oer/raw/master/materials/21/21.pptx
[スライド_参加型GISと社会貢献]:https://github.com/gis-oer/gis-oer/raw/master/materials/26/26.pptx

[課題ページ_QGISビギナーズマニュアル]:./tasks/t_qgis_entry.md
[課題ページ_GRASSビギナーズマニュアル]:./tasks/t_grass_entry.md
[課題ページ_リモートセンシングとその解析]:./tasks/t_06.md
[課題ページ_既存データの地図データと属性データ]:./tasks/t_07.md
[課題ページ_空間データ]:./tasks/t_08.md
[課題ページ_空間データベース]:./tasks/t_09.md
[課題ページ_空間データの統合・修正]:./tasks/t_10.md
[課題ページ_基本的な空間解析]:./tasks/t_11.md
[課題ページ_ネットワーク分析]:./tasks/t_12.md
[課題ページ_基本的な空間解析]:./tasks/t_13.md
[課題ページ_点データの分析]:./tasks/t_14.md
[課題ページ_ラスタデータの分析]:./tasks/t_15.md
[課題ページ_空間補間]:./tasks/t_18.md
[課題ページ_視覚的伝達]:./tasks/t_21.md
[課題ページ_参加型GISと社会貢献]:./tasks/t_26.md